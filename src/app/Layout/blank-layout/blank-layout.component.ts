import { Component } from '@angular/core'
import { NavBarComponent } from '../nav-bar/nav-bar.component'
import { RouterOutlet } from '@angular/router'
import { FooterComponent } from '../footer/footer.component'

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [NavBarComponent, RouterOutlet, FooterComponent],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss'
})
export class BlankLayoutComponent {
  text: string = encodeURIComponent('Check out this amazing content!')
  url: string = encodeURIComponent('http://localhost:4200/')

  constructor() {}
  shareOnwhatsApp() {
    const whatsappUrl = `https://web.whatsapp.com/send?text=tenders-pink.vercel.app`
    // const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=https://tenders-pink.vercel.app`;

    window.open(whatsappUrl, '_blank')
  }
}
