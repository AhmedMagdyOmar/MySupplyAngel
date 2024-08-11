import { toastrHelper } from './../../../../Core/Helper/toaster.service'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from './../../../../Core/services/authService/auth.service'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { Router, RouterModule } from '@angular/router'
import { NgIf } from '@angular/common'
import { SubSink } from 'subsink'
import { RecordComponent } from '../../../../Theme/component/record/record.component'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, NgIf, RecordComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
  private subs = new SubSink()
  loginForm!: FormGroup
  showPassword: boolean = false
  record = [
    {
      pageName: 'الصفحه الرئيسيه',
      router: '/home'
    },
    {
      pageName: 'تسجيل الدخول',
      router: '/auth/login'
    }
  ]
  constructor(
    private AuthService: AuthService,
    private _fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private toastrHelper: toastrHelper
  ) {}

  ngOnInit() {
    this.handleloginForm()
  }

  handleloginForm() {
    this.loginForm = this._fb.group({
      // username: ['', [Validators.email, Validators.required]],
      username: ['', [Validators.required, Validators.pattern(/^(011|012|015|010)[0-9]{8}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9@-_$%#@!*. ]{8,15}$/)]]
    })
  }
  submitForm() {
    if (this.loginForm.valid) {
      this.subs.add(
        this.AuthService.userLogin(this.loginForm.value).subscribe({
          next: (res) => {
            const message = res.message == '' ? 'تم تسجيل الدخول بنجاح' : res.message
            this.toastr.success(message)
            localStorage.setItem('userToken', res.data.token)
            this.AuthService.decode()
            this.router.navigate(['/home'])
          },
          error: () => {
            this.toastr.error('رقم الهاتف او كلمه المرور غير صحيحه')
          }
        })
      )
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
