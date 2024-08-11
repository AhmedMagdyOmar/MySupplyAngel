import { AgentService } from './../../../Core/services/agent/agent.service'
import { Component, Inject, OnDestroy, PLATFORM_ID, signal, OnInit } from '@angular/core'
import { ButtonWithCloseIconComponent } from '../../../Theme/component/button-with-close-icon/button-with-close-icon.component'
import { NgFor, NgIf, isPlatformBrowser } from '@angular/common'
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { CategoryList } from '../../../Core/Interface/category'
import { CategoryService } from '../../../Core/services/categoryService/category.service'
import { ActivatedRoute, Router } from '@angular/router'
import { SubSink } from 'subsink'
import { RecordComponent } from '../../../Theme/component/record/record.component'
import { Pagerecord } from '../../../Core/Interface/record'
import { CategorySearchPipe } from '../../../Core/pipe/category-search.pipe'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-agent',
  standalone: true,
  imports: [ButtonWithCloseIconComponent, ReactiveFormsModule, FormsModule, NgIf, NgFor, RecordComponent, CategorySearchPipe, SweetAlert2Module],
  templateUrl: './add-agent.component.html',
  styleUrl: './add-agent.component.scss'
})
export class AddAgentComponent implements OnDestroy, OnInit {
  private subs = new SubSink()
  agentForm!: FormGroup
  categoryList!: CategoryList[]
  category = signal<CategoryList[]>([])
  alertOpen: boolean = false
  inValidForm: boolean = false
  isBrowser = signal(false)
  imageUrl: any = []
  fileNmae!: string
  expiration_images: any = []
  expiration_files: any
  errorMassage: string = ''
  pageName: string = ''
  agentType!: string
  record: Pagerecord[] = [
    {
      pageName: 'الصفحه الرئيسيه',
      router: '/home'
    },
    {
      pageName: 'الوكلاء',
      router: '/agent/require-agent'
    }
  ]
  categorySearchKeyword: string = ''
  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private _fb: FormBuilder,
    private CategoryService: CategoryService,
    private agentService: AgentService,
    private toastr: ToastrService,
    private Router: Router,
    private route: ActivatedRoute
  ) {
    this.isBrowser.set(isPlatformBrowser(platformId))
  }
  ngOnInit(): void {
    this.handleRegisterForm()
    this.getCategory()

    if (this.Router.url.includes('search')) {
      this.agentType = 'potential_agent_or_potential_distrebutor'
      this.record = [
        ...this.record,
        {
          pageName: 'احصل علي حق الوكالة او التوزيع',
          router: '/agent/search-agent-or-distrebutor'
        }
      ]
    } else {
      this.agentType = 'required_agent_or_distrebutor'
      this.record = [
        ...this.record,
        {
          pageName: 'احصل علي حق الوكالة او التوزيع',
          router: '/agent/add-agent-or-distrebutor'
        }
      ]
    }
  }

  handleRegisterForm() {
    this.agentForm = this._fb.group({
      title: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      product_name: ['', [Validators.required]],
      company_name: ['', [Validators.required]],
      agent_type: ['', [Validators.required]],
      expiry_date: ['', [Validators.required]],
      expiration_images: [null, [Validators.required]],
      expiration_files: [null, [Validators.required]]
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
          if (this.imageUrl.length < 4) {
            this.imageUrl = [...new Set([...this.imageUrl, e.target.result])]
            if (this.expiration_images.length > 0) {
              this.expiration_images = [...new Set([...this.expiration_images, file])]
            } else {
              this.expiration_images = [file]
            }
          } else {
            this.toastr.error('4 يجب الا يزيد عدد الصور عن ')
          }
        }

        if (identifier === 'other') {
          this.expiration_files = file
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
  submitForm() {
    if (!this.expiration_images) {
      this.inValidForm = true
      this.errorMassage = 'يجب اضافه صور '
      return
    }

    if (!this.category().length) {
      this.inValidForm = true
      this.errorMassage = 'يجب ملء جميع حقول الادخال واختيار تخصص'
      return
    }
    if (!this.alertOpen) {
      Swal.fire({
        icon: 'question',
        title: 'لايمكنك التعديل علي الصفقه بمجرد انشائها  !!',
        showConfirmButton: true,
        didClose: () => {
          this.alertOpen = true
          this.submitForm()
        }
      })
      return
    }
    const formData = new FormData()
    if (this.agentForm.valid && this.category().length) {
      this.inValidForm = false
      this.errorMassage = ''
      formData.append('title', this.agentForm.get('title')?.value)
      formData.append('desc', this.agentForm.get('desc')?.value)
      formData.append('company_name', this.agentForm.get('company_name')?.value)
      formData.append('product_name', this.agentForm.get('product_name')?.value)
      formData.append('agent_type', this.agentForm.get('agent_type')?.value)
      formData.append('type', this.agentType)
      const CategoryIds = this.category().map((e) => e.id)
      CategoryIds.forEach((id) => formData.append('category_ids[]', JSON.stringify(id)))
      formData.append('expiry_date', this.agentForm.get('expiry_date')?.value)
      this.expiration_images.forEach((img: any, i: number) => {
        formData.append(`agent_images[${i}]`, img)
      })

      formData.append('agent_files[]', this.expiration_files)
      this.subs.add(
        this.agentService.addAgentOrDistrebuter(formData).subscribe(
          (res) => {
            const message = res.message == '' ? 'تم  الاضافه بنجاح' : res.message
            Swal.fire({
              icon: 'success',
              title: message,
              showConfirmButton: false,
              timer: 1500
            })
            this.toastr.success(message)
            this.Router.navigate(['../'], { relativeTo: this.route })
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
