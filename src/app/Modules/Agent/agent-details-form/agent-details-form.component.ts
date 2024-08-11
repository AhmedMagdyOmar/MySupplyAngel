import { AgentService } from './../../../Core/services/agent/agent.service'
import { Component, Inject, PLATFORM_ID, signal, OnInit, OnDestroy } from '@angular/core'
import { ButtonWithCloseIconComponent } from '../../../Theme/component/button-with-close-icon/button-with-close-icon.component'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { NgFor, NgIf, isPlatformBrowser } from '@angular/common'
import { SafePipePipe } from '../../../Core/pipe/safe-pipe.pipe'
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { SubSink } from 'subsink'
import { CategoryList } from '../../../Core/Interface/category'
import { CategoryService } from '../../../Core/services/categoryService/category.service'
import { CategorySearchPipe } from '../../../Core/pipe/category-search.pipe'

@Component({
  selector: 'app-agent-details-form',
  standalone: true,
  imports: [ButtonWithCloseIconComponent, ReactiveFormsModule, FormsModule, NgIf, SafePipePipe, NgFor, CategorySearchPipe],
  templateUrl: './agent-details-form.component.html',
  styleUrl: './agent-details-form.component.scss'
})
export class AgentDetailsFormComponent implements OnInit, OnDestroy {
  private subs = new SubSink()
  agentForm!: FormGroup
  categoryList!: CategoryList[]
  category = signal<CategoryList[]>([])

  inValidForm: boolean = false
  isBrowser = signal(false)
  imageUrl: any = []
  otherfile!: string
  tender_images: any
  specifications_file!: string
  tender_specifications_file: any
  tender_other_files: any
  errorMassage: string = ''
  agentId!: number
  specifications_fileType: string = ''
  otherfileType: string = ''
  myTender: boolean = false
  categorySearchKeyword: string = ''

  offerForm!: FormGroup
  offerFile!: string
  offer_File!: string
  offerFile_fileType: string = ''
  myOffer: any
  OfferImageUrl: any = []
  offer_images: any
  canAddOffer: boolean = false
  offerImageChange: boolean = false
  offerFileChange: boolean = false
  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private _fb: FormBuilder,
    private CategoryService: CategoryService,
    private agentService: AgentService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.isBrowser.set(isPlatformBrowser(platformId))
  }
  ngOnInit(): void {
    this.agentId = this.route.snapshot.parent?.params['id']
    if (this.agentId) {
      this.handleRegisterForm()
      this.handleForm()
      this.getTenderDetails()
    }
    this.handleRegisterForm()
    this.getCategory()
  }

  handleRegisterForm() {
    this.agentForm = this._fb.group({
      title: ['', [Validators.required]],
      desc: ['', [Validators.required]],

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
    this.agentService.getAgentDetails(this.agentId).subscribe((tender) => {
      // this.myTender=tender.data.is_my_agent
      this.canAddOffer = tender.data.is_my_agent
      this.agentForm.get('title')?.setValue(tender.data.title)
      this.agentForm.get('desc')?.setValue(tender.data.desc)

      this.agentForm.get('company_name')?.setValue(tender.data.company_name)
      this.agentForm.get('expiry_date')?.setValue(tender.data.expiry_date)
      if (!this.myTender) {
        this.agentForm.get('title')?.disable()
        this.agentForm.get('desc')?.disable()

        this.agentForm.get('company_name')?.disable()
        this.agentForm.get('expiry_date')?.disable()
      }

      if (tender.data.added_offer) {
        this.myOffer = tender.data.my_agent_offer
        this.offerForm.get('desc')?.setValue(tender.data.my_agent_offer.desc)
        this.OfferImageUrl = tender.data.my_agent_offer.images
        this.offerFile = tender.data.my_agent_offer.files[0].media
        this.offerFile_fileType = this.offerFile?.includes('docx') ? 'docx' : this.offerFile?.includes('pdf') ? 'pdf' : 'txt'
        this.offerForm.get('desc')?.disable()
      }

      this.imageUrl = tender.data.agent_images
      this.otherfile = tender.data.agent_files[0].media
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
  navigateToDocument(link: string) {
    // if(typeof link==='string'){
    //   window.open(link,'_blank')
    // }else{
    this.downloadFile(link)
    // }
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
        this.agentService.updateOffer(formData, this.agentId, this.myOffer.id).subscribe(
          (res) => {
            const message = res.message == '' ? 'تم  الاضافه بنجاح' : res.message
            this.toastr.success(message)
            this.router.navigate(['/'])
          },
          (error) => {
            this.toastr.error(error)
          }
        )
      )
    }
  }

  submitForm() {
    this.inValidForm = true

    if (!this.category().length) {
      this.errorMassage = 'يجب ملء جميع حقول الادخال واختيار تخصص'
      return
    }
    const formData = new FormData()
    if (this.agentForm.valid && this.category().length) {
      this.inValidForm = false
      this.errorMassage = ''
      formData.append('title', this.agentForm.get('title')?.value)
      formData.append('desc', this.agentForm.get('desc')?.value)

      formData.append('company_name', this.agentForm.get('company_name')?.value)
      formData.append('expiry_date', this.agentForm.get('expiry_date')?.value)
      const CategoryIds = this.category().map((e) => e.id)
      CategoryIds.forEach((id) => formData.append('category_ids[]', JSON.stringify(id)))

      // Append the file
      if (this.tender_images) {
        this.tender_images.forEach((img: any, i: number) => {
          formData.append(`agent_images[${i}]`, img)
        })
      }

      if (this.tender_other_files) {
        formData.append('agent_files[]', this.tender_other_files)
      }

      this.subs.add(
        this.agentService.updateAgentOrDistrebuter(formData, this.agentId).subscribe(
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
      this.agentForm.get('expiry_date')?.setErrors({ nbDatepickerParse: { value: '' } })
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
