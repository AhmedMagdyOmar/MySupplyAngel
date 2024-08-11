import { ContactUsService } from './../../Core/services/contactUs/contact-us.service'
import { Component, OnInit } from '@angular/core'
import { RecordComponent } from '../../Theme/component/record/record.component'
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [RecordComponent, NgIf],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit {
  record = [
    {
      pageName: 'الصفحه الرئيسيه',
      router: '/home'
    },
    {
      pageName: 'الاشعارات',
      router: '/notification'
    }
  ]
  constructor(private contactUsService: ContactUsService) {}
  notification: any
  ngOnInit() {
    this.getNotification()
  }

  getNotification() {
    this.contactUsService.getNotifications().subscribe((res) => [(this.notification = res.data)])
  }
}
