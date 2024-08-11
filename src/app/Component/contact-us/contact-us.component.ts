import { toastrHelper } from './../../Core/Helper/toaster.service'
import { ContactUsService } from './../../Core/services/contactUs/contact-us.service'
import { Component, OnInit } from '@angular/core'
import { FormsModule, NgForm } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { RecordComponent } from '../../Theme/component/record/record.component'

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, RecordComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  contact!: any
  record = [
    {
      pageName: 'الصفحه الرئيسيه',
      router: '/home'
    },
    {
      pageName: 'اتصل بنا',
      router: '/contactUs'
    }
  ]
  constructor(
    private ContactUsService: ContactUsService,
    private toastr: ToastrService,
    private toastrHelper: toastrHelper
  ) {}
  ngOnInit(): void {
    this.getContact()
  }

  getContact() {
    this.ContactUsService.getContact().subscribe((contact) => {
      this.contact = contact.data
    })
  }

  openGoogleMaps(lati: number, long: number) {
    const lat = lati // Example latitude
    const lng = long // Example longitude
    const url = `https://www.google.com/maps?q=${lat},${lng}`
    window.open(url, '_blank')
  }
  navigateToSocial(link: string) {
    window.open(link, '_blank')
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.ContactUsService.sendMessage(form.value).subscribe(
        (res) => {
          this.toastr.success(res.message)
        },
        (error) => {
          this.toastr.error(error.error.message)
        }
      )
    }
  }
}
