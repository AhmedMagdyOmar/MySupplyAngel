import { CountryService } from './../../../../Core/services/CountryService/country.service'
import { AuthService } from './../../../../Core/services/authService/auth.service'
import { CategoryService } from './../../../../Core/services/categoryService/category.service'
import { Component, Inject, OnInit, PLATFORM_ID, signal, OnDestroy } from '@angular/core'
import { ButtonWithCloseIconComponent } from '../../../../Theme/component/button-with-close-icon/button-with-close-icon.component'
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms'
import { CategoryList } from '../../../../Core/Interface/category'
import { ToastrService } from 'ngx-toastr'
import { NgIf, isPlatformBrowser } from '@angular/common'
import { Router, RouterModule } from '@angular/router'
import { Country, cities } from '../../../../Core/Interface/countries'
import { SubSink } from 'subsink'
import { RecordComponent } from '../../../../Theme/component/record/record.component'
import { CategorySearchPipe } from '../../../../Core/pipe/category-search.pipe'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ButtonWithCloseIconComponent, ReactiveFormsModule, FormsModule, NgIf, RouterModule, RecordComponent, CategorySearchPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit, OnDestroy {
  private subs = new SubSink()
  RegisterForm!: FormGroup
  categoryList!: CategoryList[]
  category = signal<CategoryList[]>([])
  register: boolean = false
  timer = signal(30)
  resendCode: boolean = false
  inValidForm: boolean = false
  setTimerInterVal: any
  isBrowser = signal(false)
  showPassword: boolean = false
  showConfirmPassword: boolean = false
  countries!: Country[]
  cities!: cities[]
  record = [
    {
      pageName: 'الصفحه الرئيسيه',
      router: '/home'
    },
    {
      pageName: 'انشاء عضوية',
      router: '/auth/register'
    }
  ]
  categorySearchKeyword: string = ''
  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private _fb: FormBuilder,
    private CategoryService: CategoryService,
    private AuthService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private CountryService: CountryService
  ) {
    this.isBrowser.set(isPlatformBrowser(platformId))
  }
  ngOnInit(): void {
    this.handleRegisterForm()
    this.getCategory()
    this.getCountry()
    this.getCities()
  }

  handleRegisterForm() {
    this.RegisterForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email, Validators.required]],
      confirm_email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9@-_$%#@!*. ]{8,}$/)]],
      password_confirmation: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9@-_$%#@!*. ]{8,}$/)]],
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
  passwordMatch() {
    const password = this.RegisterForm.get('password')
    const repassword = this.RegisterForm.get('password_confirmation')
    if (password?.value == repassword?.value) {
      return ''
    } else {
      repassword?.setErrors({
        passwordMatc: 'password and repassword dont match'
      })
      return { passwordMatc: 'password and repassword dont match' }
    }
  }
  emailMatch() {
    const email = this.RegisterForm.get('email')
    const reEmail = this.RegisterForm.get('confirm_email')
    if (email?.value == reEmail?.value) {
      return ''
    } else {
      reEmail?.setErrors({ reEmail: 'Email not Match' })
      return { passwordMatc: 'Email not Match' }
    }
  }
  getCountry() {
    this.subs.add(
      this.CountryService.getCountries().subscribe((res) => {
        this.countries = res.data
      })
    )
  }
  getCities() {
    this.subs.add(
      this.CountryService.getcities().subscribe((res) => {
        this.cities = res.data
      })
    )
  }
  submitForm() {
    this.passwordMatch()
    this.emailMatch()
    this.inValidForm = true

    if (this.RegisterForm.valid && this.category().length) {
      this.inValidForm = false
      this.subs.add(
        this.AuthService.userRegister(this.RegisterForm.value).subscribe(
          (res) => {
            this.register = true
            this.toastr.success(res.message, '', {
              positionClass: 'toast-center'
            })
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
            this.register = false
            this.toastr.error(error.error.message)
          }
        )
      )
    }
  }
  getCategory() {
    this.subs.add(
      this.CategoryService.getCategoryList().subscribe((res) => {
        this.categoryList = res.data
      })
    )
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
  activationCode(f: NgForm) {
    if (f.valid) {
      const userForm = {
        ...f.value,
        phone_code: this.RegisterForm.get('phone_code')?.value,
        phone: this.RegisterForm.get('phone')?.value
      }

      this.subs.add(
        this.AuthService.activateCode(userForm).subscribe(
          (res) => {
            this.toastr.success(res.message)
            this.router.navigate(['/auth/login'])
          },
          (error) => {
            this.toastr.error(error.error.message)
          }
        )
      )
    }
  }
  handleResendCode() {
    window.clearInterval(this.setTimerInterVal)
    this.timer.set(30)
    this.resendCode = false
    this.setTimerInterVal = setInterval(() => {
      if (this.timer() > 0) {
        this.timer.set(this.timer() - 1)
      } else {
        this.resendCode = true
      }
    }, 1000)

    const form = {
      phone_code: this.RegisterForm.get('phone_code')?.value,
      phone: this.RegisterForm.get('phone')?.value
    }
    this.subs.add(
      this.AuthService.ResendActivateCode(form).subscribe(
        () => {
          this.resendCode = false
          this.toastr.success('تم التسجيل بنجاح')
        },
        (error) => {
          this.resendCode = true
          this.toastr.error(error.message)
        }
      )
    )
  }
  categroySearch(event: any) {
    this.categorySearchKeyword = event.target.value
  }
  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
