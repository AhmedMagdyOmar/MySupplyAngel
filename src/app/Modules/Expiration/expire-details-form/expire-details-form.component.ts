import { Component, Inject, PLATFORM_ID, signal, OnInit, OnDestroy } from '@angular/core'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { CategoryService } from '../../../Core/services/categoryService/category.service'
import { NgFor, NgIf, isPlatformBrowser } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { SubSink } from 'subsink'
import { CategoryList } from '../../../Core/Interface/category'
import { ButtonWithCloseIconComponent } from '../../../Theme/component/button-with-close-icon/button-with-close-icon.component'
import { SafePipePipe } from '../../../Core/pipe/safe-pipe.pipe'
import { ExpirationService } from '../../../Core/services/expiration/expiration.service'
import { CategorySearchPipe } from '../../../Core/pipe/category-search.pipe'

@Component({
  selector: 'app-tender-expire-form',
  standalone: true,
  imports: [ButtonWithCloseIconComponent, ReactiveFormsModule, FormsModule, NgIf, SafePipePipe, NgFor, CategorySearchPipe],
  templateUrl: './expire-details-form.component.html',
  styleUrl: './expire-details-form.component.scss'
})
export class TenderExpireFormComponent implements OnInit, OnDestroy {
  private subs = new SubSink()
  expirationForm!: FormGroup
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
  expireId!: number
  specifications_fileType: string = ''
  otherfileType: string = ''
  myExpire: boolean = false
  categorySearchKeyword: string = ''
  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private _fb: FormBuilder,
    private CategoryService: CategoryService,
    private expirationService: ExpirationService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.isBrowser.set(isPlatformBrowser(platformId))
  }
  ngOnInit(): void {
    this.expireId = this.route.snapshot.parent?.params['id']
    if (this.expireId) {
      this.handleRegisterForm()
      this.getTenderDetails()
    }
    this.handleRegisterForm()
    this.getCategory()
  }

  handleRegisterForm() {
    this.expirationForm = this._fb.group({
      title: ['', [Validators.required]],
      desc: ['', [Validators.required]],

      company_name: ['', [Validators.required]],
      expiry_date: ['', [Validators.required]]
    })
  }
  getTenderDetails() {
    this.expirationService.getExpireDetails(this.expireId).subscribe((item) => {
      this.expirationForm.get('title')?.setValue(item.data.title)
      this.expirationForm.get('desc')?.setValue(item.data.desc)
      this.expirationForm.get('company_name')?.setValue(item.data.company_name)
      this.expirationForm.get('expiry_date')?.setValue(item.data.expiry_date)
      if (!this.myExpire) {
        this.expirationForm.get('title')?.disable()
        this.expirationForm.get('desc')?.disable()

        this.expirationForm.get('company_name')?.disable()
        this.expirationForm.get('expiry_date')?.disable()
      }
      this.imageUrl = item.data.expiration_images

      this.otherfile = item.data.expiration_files[0].media
      this.otherfileType = this.otherfile?.includes('docx') ? 'docx' : this.otherfile?.includes('pdf') ? 'pdf' : 'txt'
      this.category.update((oldValue) => {
        return [...oldValue, ...item.data.categories]
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
  navigateToDocument(link: string) {
    // if(typeof link==='string'){
    //   window.open(link,'_blank')
    // }else{
    this.downloadFile(link)
    // }
  }
  onFileSelected(event: any, identifier?: string) {
    const file = event.target.files[0]
    if (identifier === 'image') {
      this.imageUrl = []
    }
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

        if (identifier === 'file') {
          this.tender_specifications_file = file
          this.specifications_file = file
          this.specifications_fileType = file.name?.includes('docx') ? 'docx' : file.name?.includes('pdf') ? 'pdf' : 'txt'
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
    if (this.expirationForm.valid && this.category().length) {
      this.inValidForm = false
      this.errorMassage = ''
      formData.append('title', this.expirationForm.get('title')?.value)
      formData.append('desc', this.expirationForm.get('desc')?.value)

      formData.append('company_name', this.expirationForm.get('company_name')?.value)
      formData.append('expiry_date', this.expirationForm.get('expiry_date')?.value)
      const CategoryIds = this.category().map((e) => e.id)
      CategoryIds.forEach((id) => formData.append('category_ids[]', JSON.stringify(id)))
      // Append the file
      if (this.tender_images) {
        this.tender_images.forEach((img: any, i: number) => {
          formData.append(`expiration_images[${i}]`, img)
        })
      }

      if (this.tender_other_files) {
        formData.append('expiration_files[]', this.tender_other_files)
      }

      this.subs.add(
        this.expirationService.updateExpireItem(formData, this.expireId).subscribe(
          (res) => {
            const message = res.message == '' ? 'تم  الاضافه بنجاح' : res.message
            this.toastr.success(message)
            this.router.navigate(['/'])
          },
          (error) => {
            this.toastr.error(error.error.message)
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
      this.expirationForm.get('expiry_date')?.setErrors({ nbDatepickerParse: { value: '' } })
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
