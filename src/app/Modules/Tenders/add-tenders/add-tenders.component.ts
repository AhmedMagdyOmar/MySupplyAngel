import { Component, Inject, OnDestroy, PLATFORM_ID, signal, OnInit } from '@angular/core'
import { ButtonWithCloseIconComponent } from '../../../Theme/component/button-with-close-icon/button-with-close-icon.component'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { NgFor, NgIf, isPlatformBrowser } from '@angular/common'
import { ToastrService } from 'ngx-toastr'
import { CategoryList } from '../../../Core/Interface/category'
import { CategoryService } from '../../../Core/services/categoryService/category.service'
import { TendersService } from '../../../Core/services/tenders/tenders.service'
import { SubSink } from 'subsink'
import { Router } from '@angular/router'
import { Pagerecord } from '../../../Core/Interface/record'
import { RecordComponent } from '../../../Theme/component/record/record.component'
import { CategorySearchPipe } from '../../../Core/pipe/category-search.pipe'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'
import Swal from 'sweetalert2'

// Check some condition and import modules accordingly

@Component({
  selector: 'app-add-tenders',
  standalone: true,
  imports: [ButtonWithCloseIconComponent, ReactiveFormsModule, FormsModule, NgIf, NgFor, RecordComponent, CategorySearchPipe, SweetAlert2Module],
  templateUrl: './add-tenders.component.html',
  styleUrl: './add-tenders.component.scss'
})
export class AddTendersComponent implements OnDestroy, OnInit {
  private subs = new SubSink()
  record: Pagerecord[] = [
    {
      pageName: 'الصفحه الرئيسيه',
      router: '/home'
    },
    {
      pageName: 'سجل المناقصات',
      router: '/tenders/all-tenders'
    },
    {
      pageName: 'إضافة مناقصة',
      router: `/tenders/add-tenders`
    }
  ]
  categorySearchKeyword: string = ''
  tendersForm!: FormGroup
  categoryList!: CategoryList[]
  category = signal<CategoryList[]>([])
  alertOpen: boolean = false
  inValidForm: boolean = false
  isBrowser = signal(false)
  otherfileType!: string
  imageUrl: any = []
  otherfile!: string
  tender_images: any = []
  tender_specifications_file: any
  tender_other_files: any
  errorMassage: string = ''
  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private _fb: FormBuilder,
    private CategoryService: CategoryService,
    private TendersService: TendersService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.isBrowser.set(isPlatformBrowser(platformId))
  }
  ngOnInit(): void {
    this.handleRegisterForm()
    this.getCategory()
  }

  handleRegisterForm() {
    this.tendersForm = this._fb.group({
      title: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      tender_specifications_value: ['', [Validators.required]],
      insurance_value: ['', [Validators.required]],
      company_name: ['', [Validators.required]],
      expiry_date: ['', [Validators.required]],
      specifications_file: [null, [Validators.required]],
      tender_other_files: [null, [Validators.required]]
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
          if (this.imageUrl.length < 4) {
            this.imageUrl = [...new Set([...this.imageUrl, e.target.result])]
            this.tender_images = [...new Set([...this.tender_images, file])]
          } else {
            this.toastr.error('4 يجب الا يزيد عدد الصور عن ')
          }
        }
        if (identifier === 'file') {
          this.tender_specifications_file = file
        }

        if (identifier === 'other') {
          this.tender_other_files = file

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
    this.inValidForm = true
    if (!this.tender_images) {
      this.errorMassage = 'يجب اضافه صور المناقصه'
      return
    }
    if (!this.tender_specifications_file) {
      this.errorMassage = 'يجب اضافه كراسة الشروط'
      return
    }
    if (!this.category().length) {
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
      formData.append('tender_specifications_value', this.tendersForm.get('tender_specifications_value')?.value)
      formData.append('insurance_value', this.tendersForm.get('insurance_value')?.value)
      formData.append('company_name', this.tendersForm.get('company_name')?.value)
      formData.append('expiry_date', this.tendersForm.get('expiry_date')?.value)
      const CategoryIds = this.category().map((e) => e.id)
      CategoryIds.forEach((id) => formData.append('category_ids[]', JSON.stringify(id)))

      // Append the file
      this.tender_images.forEach((img: any, i: number) => {
        formData.append(`tender_images[${i}]`, img)
      })

      formData.append('tender_specifications_file', this.tender_specifications_file)
      formData.append('tender_other_files[]', this.tender_other_files)
      this.subs.add(
        this.TendersService.addTenders(formData).subscribe(
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
