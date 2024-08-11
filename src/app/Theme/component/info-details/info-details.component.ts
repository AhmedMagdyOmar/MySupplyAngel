import { AuthService } from './../../../Core/services/authService/auth.service'
import { NgIf } from '@angular/common'
import { Component, input, model, OnInit, output } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-info-details',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './info-details.component.html',
  styleUrl: './info-details.component.scss'
})
export class InfoDetailsComponent implements OnInit {
  isLogin: boolean = false
  details = input<any>()
  router = input<any>()
  addToWhishList = output<any>()
  inWishList = model<boolean>(false)
  MyTender = model<boolean>()
  openShare = false

  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {
    this.AuthService.UserSignIn.subscribe(() => {
      if (this.AuthService.UserSignIn.getValue() != null) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    })
  }

  transformDate(date: any) {
    const create = new Date(date)
    const current = new Date()
    const diff = current.getTime() - create.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    return days
  }
  shareButton() {
    const domain = window.location.origin
    navigator.share({
      title: 'Check this out!',
      text: 'Check out this amazing content.',
      url: `${domain}/tenders/${this.details().id}/tender-details`
    })
  }
  shareThisCard(social: string) {
    const detailsId = this.details().id
    const shareUrl = `https://tenders-pink.vercel.app/expiration/${detailsId}/details`
    if (social === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${shareUrl}`, '_blank')
    } else if (social === 'facbook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')
    } else if (social === 'whatsapp') {
      window.open(`https://web.whatsapp.com/send?text=${shareUrl}`, '_blank')
    }
  }
  handleWhishlist() {
    this.inWishList.update((e) => !e)
    this.addToWhishList.emit(this.details())
  }
}
