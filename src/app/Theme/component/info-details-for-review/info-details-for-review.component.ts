import { NgIf, NgStyle } from '@angular/common'
import { Component, input, model, output } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../../../Core/services/authService/auth.service'

@Component({
  selector: 'app-info-details-for-review',
  standalone: true,
  imports: [NgIf, NgStyle],
  templateUrl: './info-details-for-review.component.html',
  styleUrl: './info-details-for-review.component.scss'
})
export class InfoDetailsForReviewComponent {
  details = input<any>()
  cardType = input<string>()
  addToWhishList = output<any>()
  navigateToUpdate = output<any>()
  inWishList = model<boolean>(false)
  openShare = false

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  transformDate(date: any) {
    const create = new Date(date)
    const current = new Date()
    const diff = current.getTime() - create.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    return days
  }

  handleWhishlist() {
    if (this.authService.UserSignIn.getValue()) {
      this.inWishList.update((e) => !e)
      this.addToWhishList.emit(this.details())
    } else {
      this.toastr.info('يجب تسجيل الدخول اولا')
    }
  }
  navigate() {
    this.navigateToUpdate.emit('')
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
}
