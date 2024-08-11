import { profileService } from './../../Core/services/profileService/profile.service'
import { NgIf, NgStyle, isPlatformBrowser } from '@angular/common'
import { Component, Inject, PLATFORM_ID, ViewChild, signal, OnInit } from '@angular/core'
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { CategoryList } from '../../Core/Interface/category'
import { Country, cities } from '../../Core/Interface/countries'
import { ButtonWithCloseIconComponent } from '../../Theme/component/button-with-close-icon/button-with-close-icon.component'
import { CategoryService } from '../../Core/services/categoryService/category.service'
import { CountryService } from '../../Core/services/CountryService/country.service'
import { Person } from '../../Core/Interface/profile'
import { TogglebuttonComponent } from '../../Theme/component/togglebutton/togglebutton.component'
import { RecordComponent } from '../../Theme/component/record/record.component'

@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [TogglebuttonComponent, ButtonWithCloseIconComponent, ReactiveFormsModule, FormsModule, NgIf, RouterModule, NgStyle, RecordComponent],
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.scss'
})
export class AccountInfoComponent implements OnInit {
  @ViewChild('form') form!: NgForm
  userForm!: FormGroup
  categoryList!: CategoryList[]
  category = signal<CategoryList[]>([])
  timer = signal(30)
  resendCode: boolean = false
  inValidForm: boolean = false
  setTimerInterVal: any
  isBrowser = signal(false)
  showPassword: boolean = false
  showConfirmPassword: boolean = false
  countries!: Country[]
  cities!: cities[]
  userProfile!: Person
  choseCountry: string = ''
  choseCity: string = ''
  passwordChange: boolean = false
  phoneChanged: boolean = false
  emailChanged: boolean = false
  record = [
    {
      pageName: 'الصفحه الرئيسيه',
      router: '/home'
    },
    {
      pageName: 'انشاء عضوية',
      router: '/acccount-info'
    }
  ]
  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private _fb: FormBuilder,
    private CategoryService: CategoryService,
    private toastr: ToastrService,
    private CountryService: CountryService,
    private profileService: profileService
  ) {
    this.isBrowser.set(isPlatformBrowser(platformId))
  }
  ngOnInit(): void {
    this.handleRegisterForm()
    this.getCategory()
    this.getCountry()
    this.getCities()
    this.GetUserProfile()
  }

  GetUserProfile() {
    this.profileService.getUserProfile().subscribe((profile) => {
      this.userProfile = profile.data
      this.userForm.get('name')?.setValue(this.userProfile.name)
      this.userForm.get('phone')?.setValue(this.userProfile.phone)
      this.userForm.get('whats')?.setValue(this.userProfile.whats)
      this.userForm.get('company_name')?.setValue(this.userProfile.company_name)
      this.userForm.get('email')?.setValue(this.userProfile.email)
      this.userForm.get('tax_card_num')?.setValue(this.userProfile.tax_card_num)
      this.userForm.get('commercial_register_num')?.setValue(this.userProfile.commercial_register_num)
      this.userForm.get('country_id')?.setValue(this.userProfile.country.id)
      this.userForm.get('city_id')?.setValue(this.userProfile.city.id)
      this.category.update((oldValue) => {
        return [...oldValue, ...this.userProfile.categories]
      })
    })
  }

  handleRegisterForm() {
    this.userForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^(011|012|015|010)[0-9]{8}$/)]],
      whats: ['', [Validators.pattern(/^(011|012|015|010)[0-9]{8}$/)]],
      phone_code: [20],
      country_id: ['', [Validators.required]],
      city_id: ['', [Validators.required]],
      company_name: ['', [Validators.minLength(3)]],
      tax_card_num: ['', []],
      commercial_register_num: ['', []]
    })
  }
  passwordMatch(form: NgForm) {
    const password = form.controls['password']
    const repassword = form.controls['password_confirmation']
    if (password?.value == repassword?.value) {
      return ''
    } else {
      repassword?.setErrors({
        passwordMatc: 'password and repassword dont match'
      })
      return { passwordMatc: 'password and repassword dont match' }
    }
  }

  changePasswordToggle(event: boolean) {
    this.passwordChange = event
  }
  getCountry() {
    this.CountryService.getCountries().subscribe((res) => {
      this.countries = res.data
    })
  }
  getCities() {
    this.CountryService.getcities().subscribe((res) => {
      this.cities = res.data
    })
  }

  changePassword(form: NgForm) {
    this.passwordMatch(this.form)
    if (form.valid) {
      this.profileService.Changepassword(form.value).subscribe(
        (res) => {
          this.toastr.success(res.message)
        },
        (error) => {
          this.toastr.error(error.error.message)
        }
      )
    }
  }
  submitForm() {
    this.inValidForm = true
    if (this.userForm.valid && this.category().length > 0) {
      this.inValidForm = false
      this.userForm.value.categories = this.category().map((e) => e.id)
      this.profileService.updateUserProfile(this.userForm.value).subscribe(
        (res) => {
          this.toastr.success(res.message)
          if (this.isBrowser()) {
            this.setTimerInterVal = window.setInterval(() => {
              if (this.timer() > 0) {
                this.timer.set(this.timer() - 1)
              } else {
                this.resendCode = true
              }
            }, 1000)
          }
        },
        (error) => {
          this.toastr.error(error.error.message)
        }
      )
    }
  }
  getCategory() {
    this.CategoryService.getCategoryList().subscribe((res) => {
      this.categoryList = res.data
    })
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
  sendActiveCode() {
    const phone = {
      phone: this.userForm.get('phone')?.value,
      phone_code: this.userForm.get('phone_code')?.value
    }
    this.profileService.sendActiveCodeToChangePassword(phone).subscribe(
      (res) => {
        this.phoneChanged = true

        this.toastr.success(res.message)
      },
      (error) => {
        this.toastr.error(error.error.message)
      }
    )
  }
  ChangePhoneNumber(form: NgForm) {
    if (form.valid) {
      form.value.phone = this.userForm.get('phone')?.value
      form.value.phone_code = this.userForm.get('phone_code')?.value
      form.value.phone = this.userForm.get('phone')?.value

      this.profileService.ChangePhoneNumber(form.value).subscribe(
        (res) => {
          this.toastr.success(res.message)
          this.phoneChanged = false
        },
        (error) => {
          this.toastr.error(error.error.message)
        }
      )
    }
  }
  removeCategoryFromlist(i: number) {
    this.category.update((oldvalue) => {
      oldvalue.splice(i, 1)
      return oldvalue
    })
  }
  changeEmail() {
    if (this.userForm.get('email')?.valid) {
      const email = {
        email: this.userForm.get('email')?.value
      }
      this.profileService.updatEmail(email).subscribe(
        (res) => {
          this.emailChanged = true
          this.toastr.success(res.message)
        },
        (error) => {
          this.emailChanged = false
          this.toastr.error(error.error.message)
        }
      )
    }
  }
}
