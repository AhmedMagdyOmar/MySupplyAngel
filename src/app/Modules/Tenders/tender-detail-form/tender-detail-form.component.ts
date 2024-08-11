import Swal from 'sweetalert2'
import { NgFor, NgIf, isPlatformBrowser } from '@angular/common'
import { Component, Inject, PLATFORM_ID, signal, OnInit, OnDestroy } from '@angular/core'
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { SubSink } from 'subsink'
import { CategoryList } from '../../../Core/Interface/category'
import { CategoryService } from '../../../Core/services/categoryService/category.service'
import { TendersService } from '../../../Core/services/tenders/tenders.service'
import { ButtonWithCloseIconComponent } from '../../../Theme/component/button-with-close-icon/button-with-close-icon.component'
import { ActivatedRoute, Router } from '@angular/router'
import { SafePipePipe } from '../../../Core/pipe/safe-pipe.pipe'
import { CategorySearchPipe } from '../../../Core/pipe/category-search.pipe'

@Component({
  selector: 'app-tender-detail-form',
  standalone: true,
  imports: [ButtonWithCloseIconComponent, ReactiveFormsModule, FormsModule, NgIf, SafePipePipe, NgFor, CategorySearchPipe],
  templateUrl: './tender-detail-form.component.html',
  styleUrl: './tender-detail-form.component.scss'
})
export class TenderDetailFormComponent implements OnInit, OnDestroy {
  private subs = new SubSink()
  tendersForm!: FormGroup
  offerForm!: FormGroup
  categoryList!: CategoryList[]
  category = signal<CategoryList[]>([])

  inValidForm: boolean = false
  isBrowser = signal(false)
  imageUrl: any = []
  fileNmae!: string
  otherfile!: string
  tender_images: any

  specifications_file!: string
  tender_specifications_file: any
  tender_other_files: any
  errorMassage: string = ''
  tenderId!: number
  specifications_fileType: string = ''

  otherfileType: string = ''
  myTender: boolean = false
  categorySearchKeyword: string = ''
  myOffer: any

  OfferImageUrl: any = []
  offer_images: any
  offerFile!: string
  offer_File!: string
  offerFile_fileType: string = ''
  offerImageChange: boolean = false
  offerFileChange: boolean = false
  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private _fb: FormBuilder,
    private CategoryService: CategoryService,
    private TendersService: TendersService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.isBrowser.set(isPlatformBrowser(platformId))
  }
  ngOnInit(): void {
    this.tenderId = this.route.snapshot.parent?.params['id']
    if (this.tenderId) {
      this.handleRegisterForm()
      this.getTenderDetails()
    }
    this.handleRegisterForm()
    this.getCategory()
    this.handleForm()
  }

  handleRegisterForm() {
    this.tendersForm = this._fb.group({
      title: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      tender_specifications_value: ['', [Validators.required]],
      insurance_value: ['', [Validators.required]],
      company_name: ['', [Validators.required]],
      expiry_date: ['', [Validators.required]]
    })
  }
  handleForm() {
    this.offerForm = this._fb.group({
      desc: ['', [Validators.required]]
    })
  }
  getTenderDetails() {
    this.TendersService.getTenderDetails(this.tenderId).subscribe((tender) => {
      this.myTender = tender.data.is_my_tender
      this.TendersService.myTender.next(tender.data.is_my_tender)
      this.tendersForm.get('title')?.setValue(tender.data.title)
      this.tendersForm.get('desc')?.setValue(tender.data.desc)
      this.tendersForm.get('tender_specifications_value')?.setValue(tender.data.tender_specifications_value)
      this.tendersForm.get('insurance_value')?.setValue(tender.data.insurance_value)
      this.tendersForm.get('company_name')?.setValue(tender.data.company_name)
      this.tendersForm.get('expiry_date')?.setValue(tender.data.expiry_date)

      this.tendersForm.get('title')?.disable()
      this.tendersForm.get('desc')?.disable()
      this.tendersForm.get('tender_specifications_value')?.disable()
      this.tendersForm.get('insurance_value')?.disable()
      this.tendersForm.get('company_name')?.disable()
      this.tendersForm.get('expiry_date')?.disable()

      if (tender.data.added_offer) {
        this.myOffer = tender.data.my_tender_offer
        this.offerForm.get('desc')?.setValue(tender.data.my_tender_offer.desc)
        this.OfferImageUrl = tender.data.my_tender_offer.images
        this.offerFile = tender.data.my_tender_offer.files[0].media
        this.offerFile_fileType = this.offerFile?.includes('docx') ? 'docx' : this.offerFile?.includes('pdf') ? 'pdf' : 'txt'
        this.offerForm.get('desc')?.disable()
      }
      this.imageUrl = tender.data.tender_images
      this.specifications_file = tender.data.tender_specifications_file.media
      this.specifications_fileType = this.specifications_file?.includes('docx') ? 'docx' : this.specifications_file?.includes('pdf') ? 'pdf' : 'txt'
      this.otherfile = tender.data.tender_other_files[0].media
      this.otherfileType = this.otherfile?.includes('docx') ? 'docx' : this.otherfile?.includes('pdf') ? 'pdf' : 'txt'
      this.category.update((oldValue) => {
        return [...oldValue, ...tender.data.categories]
      })
    })
  }

  getCategory() {
    this.subs.add(
      this.CategoryService.getCategoryList().subscribe((res) => {
        this.categoryList = res.data
      })
    )
  }
  categroySearch(event: any) {
    this.categorySearchKeyword = event.target.value
  }
  handleCategoryList(category: any) {
    this.category.update((oldValue) => {
      if (oldValue.includes(category)) {
        return oldValue
      } else {
        return [...oldValue, category]
      }
    })
  }
  removeCategoryFromlist(i: number) {
    this.category.update((oldvalue) => {
      oldvalue.splice(i, 1)
      return oldvalue
    })
  }
  navigateToDocument(link: any) {
    if (typeof link === 'string') {
      window.open(link, '_blank')
      return
    }
    const file = link
    const reader = new FileReader()
    reader.onload = () => {
      const newWindow = window.open()
      if (newWindow) {
        newWindow.document.write('<html><body>')
        newWindow.document.write(
          '<iframe src="' + reader.result + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>'
        )
        newWindow.document.write('</body></html>')
      } else {
        alert('Please allow popups for this website.')
      }
    }
    reader.readAsDataURL(file)
  }

  onFileSelected(event: any, identifier?: string) {
    const file = event.target.files[0]

    if (event.target.files.length > 1) {
      Array.from(event.target.files).forEach((e: any) => {
        this.handleFile(e, identifier)
      })
    } else {
      this.handleFile(file, identifier)
    }
  }
  handleFile(file: any, identifier?: string) {
    if (file) {
      const reader = new FileReader()
      reader.onload = (e: any) => {
        if (identifier === 'image') {
          this.imageUrl = [...new Set([...this.imageUrl, e.target.result])]
          if (this.tender_images > 0) {
            this.tender_images = [...new Set([...this.tender_images, file])]
          } else {
            this.tender_images = [file]
          }
        }
        if (identifier === 'Offerimage') {
          this.OfferImageUrl = [...new Set([...this.OfferImageUrl, e.target.result])]
          if (this.offer_images > 0) {
            this.offer_images = [...new Set([...this.tender_images, file])]
          } else {
            this.offer_images = [file]
          }
          this.offerImageChange = true
        }

        if (identifier === 'file') {
          this.tender_specifications_file = file
          this.specifications_file = file
          this.specifications_fileType = file.name?.includes('docx') ? 'docx' : file.name?.includes('pdf') ? 'pdf' : 'txt'
        }
        if (identifier === 'Offerfile') {
          this.offer_File = file
          this.offerFile = file
          this.offerFile_fileType = file.name?.includes('docx') ? 'docx' : file.name?.includes('pdf') ? 'pdf' : 'txt'
          this.offerFileChange = true
        }

        if (identifier === 'other') {
          this.tender_other_files = file
          this.otherfileType = file.name?.includes('docx') ? 'docx' : file.name?.includes('pdf') ? 'pdf' : 'txt'
          this.otherfile = file
        }
      }
      reader.readAsDataURL(file)
    }
  }

  downloadFile(file: any) {
    const fileName = `${file.name}`

    // Create a link element
    const newFile = new Blob([file], { type: 'text/plain' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(newFile)

    // Set the href and download attributes for the link
    link.href = url
    link.download = fileName

    // Append the link to the body (required for Firefox)
    document.body.appendChild(link)

    // Programmatically click the link to trigger the download
    link.click()

    // Remove the link from the document
    document.body.removeChild(link)

    // Revoke the object URL to free up memory
    URL.revokeObjectURL(url)
  }
  convertPdfToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
    })
  }
  submitForm() {
    this.inValidForm = true

    if (!this.category().length) {
      this.errorMassage = 'يجب ملء جميع حقول الادخال واختيار تخصص'
      return
    }
    const formData = new FormData()
    if (this.tendersForm.valid && this.category().length) {
      this.inValidForm = false
      this.errorMassage = ''
      formData.append('title', this.tendersForm.get('title')?.value)
      formData.append('desc', this.tendersForm.get('desc')?.value)
      formData.append('tender_specifications_value', this.tendersForm.get('tender_specifications_value')?.value)
      formData.append('insurance_value', this.tendersForm.get('insurance_value')?.value)
      formData.append('company_name', this.tendersForm.get('company_name')?.value)
      formData.append('expiry_date', this.tendersForm.get('expiry_date')?.value)
      const CategoryIds = this.category().map((e) => e.id)
      CategoryIds.forEach((id) => formData.append('category_ids[]', JSON.stringify(id)))

      // Append the file
      if (this.tender_images) {
        this.tender_images.forEach((img: any, i: number) => {
          formData.append(`tender_images[${i}]`, img)
        })
      }
      if (this.tender_specifications_file) {
        formData.append('tender_specifications_file', this.tender_specifications_file)
      }

      if (this.tender_other_files) {
        formData.append('tender_other_files[]', this.tender_other_files)
      }

      this.subs.add(
        this.TendersService.updateTenders(formData, this.tenderId).subscribe(
          (res) => {
            const message = res.message == '' ? 'تم  الاضافه بنجاح' : res.message
            Swal.fire({
              icon: 'success',
              title: message,
              showConfirmButton: false,
              timer: 1500
            })
            this.toastr.success(message)
            this.router.navigate(['/'])
          },
          (error) => {
            Swal.fire({
              icon: 'error',
              title: error.error.message,
              showConfirmButton: false,
              timer: 1500
            })
            this.toastr.error(error.error.message)
          }
        )
      )
    }
  }

  offerFormSubmit() {
    if (this.offerForm.valid) {
      const formData = new FormData()
      formData.append('desc', this.offerForm.get('desc')?.value)

      if (this.offer_images) {
        this.offer_images.forEach((img: any, i: number) => {
          formData.append(`images[${i}]`, img)
        })
      }
      if (this.offer_File) {
        formData.append('files[]', this.offer_File)
      }

      this.subs.add(
        this.TendersService.updateOffer(formData, this.tenderId, this.myOffer.id).subscribe(
          (res) => {
            const message = res.message == '' ? 'تم  الاضافه بنجاح' : res.message
            this.toastr.success(message)
            Swal.fire({
              icon: 'success',
              title: message,
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['/'])
          },
          (error) => {
            Swal.fire({
              icon: 'error',
              title: error.error.message,
              showConfirmButton: false,
              timer: 1500
            })
            this.toastr.error(error)
          }
        )
      )
    }
  }
  validateDateRange(e: any) {
    const today = new Date()
    const date = new Date(e.target.value)
    if (date >= today) {
      this.inValidForm = false
    } else {
      this.errorMassage = 'برجاء اعد ادخال تاريخ الانتهاء'
      this.inValidForm = true
      this.tendersForm.get('expiry_date')?.setErrors({ nbDatepickerParse: { value: '' } })
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
