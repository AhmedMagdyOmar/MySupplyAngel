import { ContactUsService } from './../../Core/services/contactUs/contact-us.service'
import { Component, OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Social } from '../../Core/Interface/contact'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  aboutContent: string = ''
  contacts!: Social
  constructor(private ContactUsService: ContactUsService) {}

  ngOnInit() {
    this.getAbout()
    this.getContacts()
  }

  getAbout() {
    this.ContactUsService.getAbout().subscribe((about) => {
      this.aboutContent = about.data.about
    })
  }
  getContacts() {
    this.ContactUsService.getContact().subscribe((contact) => {
      this.contacts = contact.data.social
    })
  }

  navigateToUrl(social: keyof typeof this.contacts) {
    window.open(this.contacts[social])
  }

  shareOnwhatsApp() {
    const whatsappUrl = `https://web.whatsapp.com/send?text=tenders-pink.vercel.app`

    window.open(whatsappUrl, '_blank')
  }
}
