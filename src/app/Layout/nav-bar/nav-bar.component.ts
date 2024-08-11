import { ContactUsService } from './../../Core/services/contactUs/contact-us.service'
import { NgIf } from '@angular/common'
import { AuthService } from './../../Core/services/authService/auth.service'
import { Component, ElementRef, OnInit } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { ClickOutsideDirectiveDirective } from '../../Core/directive/click-outside-directive.directive'
import { Notification } from '../../Core/Interface/notification.model'

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgIf, RouterModule, ClickOutsideDirectiveDirective],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  loginOverlay: boolean = false
  notificationOverLay: boolean = false
  openFirstMenu: boolean = false
  isLogin: boolean = false
  notification: Notification[] = []
  Shownotification: Notification[] = []
  constructor(
    private router: Router,
    private AuthService: AuthService,
    private contactUsService: ContactUsService,
    private toastr: ToastrService,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.AuthService.UserSignIn.subscribe(() => {
      if (this.AuthService.UserSignIn.getValue() != null) {
        this.isLogin = true
        this.getNotification()
        // this.getNotificationShow()
      } else {
        this.isLogin = false
      }
    })
  }
  getNotification() {
    this.contactUsService.getNotifications().subscribe((res) => {
      this.notification = res.data
    })
  }
  getNotificationShow() {
    this.contactUsService.getShowedNotifications().subscribe((res) => {
      this.Shownotification = res.data
    })
  }

  handleNotificationMenu() {
    this.loginOverlay = false
    this.notificationOverLay = !this.notificationOverLay
    this.openFirstMenu = false
  }
  handleFirstMenu() {
    this.loginOverlay = false
    this.notificationOverLay = false
    this.openFirstMenu = !this.openFirstMenu
  }
  handleloginOverlayMenu() {
    this.loginOverlay = !this.loginOverlay
    this.notificationOverLay = false
    this.openFirstMenu = false
  }
  note() {
    this.toastr.info('سيتم توفير هذه الخدمة قريبا')
  }

  goToSection() {
    this.router.navigate(['/home'], { fragment: 'ourServices' })
    setTimeout(() => {
      const element = this.elementRef.nativeElement.querySelector('#ourServices')
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      }
    }, 100)
  }

  closeUserInfo() {
    this.loginOverlay = false
  }
  logOut() {
    localStorage.removeItem('userToken')
    this.loginOverlay = false
    this.AuthService.UserSignIn.next(null)
    this.router.navigate(['/auth/login'])
  }
}
