import { Router } from '@angular/router'
import { NgFor, NgIf, isPlatformBrowser } from '@angular/common'
import { Component, signal, Inject, PLATFORM_ID, OnDestroy, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { CategoryList } from '../../../Core/Interface/category'
import { CategoryService } from '../../../Core/services/categoryService/category.service'
import { toastrHelper } from '../../../Core/Helper/toaster.service'
import { ButtonWithCloseIconComponent } from '../../../Theme/component/button-with-close-icon/button-with-close-icon.component'
import { ExpirationService } from '../../../Core/services/expiration/expiration.service'
import { SubSink } from 'subsink'
import { RecordComponent } from '../../../Theme/component/record/record.component'
import { Pagerecord } from '../../../Core/Interface/record'
import { CategorySearchPipe } from '../../../Core/pipe/category-search.pipe'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-expire-item',
  standalone: true,
  imports: [ButtonWithCloseIconComponent, ReactiveFormsModule, FormsModule, NgIf, NgFor, RecordComponent, CategorySearchPipe, SweetAlert2Module],
  templateUrl: './add-expire-item.component.html',
  styleUrl: './add-expire-item.component.scss'
})
export class AddExpireItemComponent implements OnDestroy, OnInit {
  private subs = new SubSink()
  tendersForm!: FormGroup
  categoryList!: CategoryList[]
  category = signal<CategoryList[]>([])
  alertOpen: boolean = false
  inValidForm: boolean = false
  isBrowser = signal(false)
  otherfileType!: string
  imageUrl: any = []
  otherfile!: string
  expiration_images: any = []
  expiration_other_files: any
  errorMassage: string = ''
  pageName: string = ''

  record: Pagerecord[] = [
    {
      pageName: 'الصفحه الرئيسيه',
      router: '/home'
    },
    {
      pageName: 'تصفيات و هوالك دورية',
      router: '/expiration/expire'
    }
  ]
  categorySearchKeyword: string = ''
  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private _fb: FormBuilder,
    private CategoryService: CategoryService,
    private ExpirationService: ExpirationService,
    private toastr: ToastrService,
    private toastrHelper: toastrHelper,
    private router: Router
  ) {
    this.isBrowser.set(isPlatformBrowser(platformId))
  }
  ngOnInit(): void {
    this.handleRegisterForm()
    this.getCategory()

    if (this.router.url.includes('expire')) {
      this.pageName = 'اضف هوالك'
      this.record = [
        ...this.record,
        {
          pageName: 'اضف هوالك',
          router: '/expiration/add-expire-item'
        }
      ]
    } else {
      this.pageName = 'اضف تصفيات'
      this.record = [
        ...this.record,
        {
          pageName: 'اضف تصفيات',
          router: '/expiration/add-liquidation-item'
        }
      ]
    }
  }

  handleRegisterForm() {
    this.tendersForm = this._fb.group({
      title: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      product_name: ['', [Validators.required]],
      company_name: ['', [Validators.required]],
      expiry_date: ['', [Validators.required]],
      expiration_images: [null],
      expiration_files: [null]
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
          this.expiration_other_files = file

          this.otherfileType = 'file'
          this.otherfile = file.name
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
    if (!this.expiration_images.length) {
      this.inValidForm = true
      this.errorMassage = 'يجب اضافه صور '
      return
    }

    if (!this.category().length) {
      this.inValidForm = true
      this.errorMassage = 'يجب ملء جميع حقول الادخال واختيار تخصص'
      return
    }

    const formData = new FormData()
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
    if (this.tendersForm.valid && this.category().length) {
      this.inValidForm = false
      this.errorMassage = ''
      formData.append('title', this.tendersForm.get('title')?.value)
      formData.append('desc', this.tendersForm.get('desc')?.value)
      formData.append('type', 'expiration')
      formData.append('company_name', this.tendersForm.get('company_name')?.value)
      formData.append('company_name', this.tendersForm.get('company_name')?.value)
      formData.append('expiry_date', this.tendersForm.get('expiry_date')?.value)
      formData.append('product_name', this.tendersForm.get('product_name')?.value)
      const CategoryIds = this.category().map((e) => e.id)
      CategoryIds.forEach((id) => formData.append('category_ids[]', JSON.stringify(id)))

      this.expiration_images.forEach((img: any, i: number) => {
        formData.append(`expiration_images[${i}]`, img)
      })

      formData.append('expiration_files[]', this.expiration_other_files)
      this.subs.add(
        this.ExpirationService.addExpireItem(formData).subscribe(
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
