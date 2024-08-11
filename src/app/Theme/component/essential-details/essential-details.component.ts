import { Component, input, model, output } from '@angular/core'
import { NgIf } from '@angular/common'
import { RouterLink } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../../../Core/services/authService/auth.service'

@Component({
  selector: 'app-essential-details',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './essential-details.component.html',
  styleUrl: './essential-details.component.scss'
})
export class EssentialDetailsComponent {
  details = input<any>()
  router = input<any>()
  addOffer = model<boolean>(true)
  addToWhishList = output<any>()
  inWishList = model<boolean>(false)
  navigateOpen = model<boolean>(false)
  navigateToUpdate = output<any>()
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
  shareButton() {
    const domain = window.location.origin

    navigator.share({
      title: 'Check this out!',
      text: 'Check out this amazing content.',
      url: `${domain}/expiration/${this.details().id}/details`
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
  navigate() {
    this.navigateToUpdate.emit('')
  }
  handleWhishlist() {
    if (this.authService.UserSignIn.getValue()) {
      this.inWishList.update((e) => !e)
      this.addToWhishList.emit(this.details())
    } else {
      this.toastr.info('يجب تسجيل الدخول اولا')
    }
  }
}
