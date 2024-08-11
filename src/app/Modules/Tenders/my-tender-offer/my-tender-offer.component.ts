import { TendersService } from './../../../Core/services/tenders/tenders.service'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { SubSink } from 'subsink'
import { SafePipePipe } from '../../../Core/pipe/safe-pipe.pipe'
import { NgIf } from '@angular/common'
import { OfferCardComponent } from '../../../Theme/component/offer-card/offer-card.component'

@Component({
  selector: 'app-my-tender-offer',
  standalone: true,
  imports: [SafePipePipe, NgIf, OfferCardComponent],
  templateUrl: './my-tender-offer.component.html',
  styleUrl: './my-tender-offer.component.scss'
})
export class MyTenderOfferComponent implements OnInit, OnDestroy {
  private subs = new SubSink()
  tenderId!: number
  hasoffer: boolean = false

  offers: any
  constructor(
    private route: ActivatedRoute,
    private TendersService: TendersService
  ) {}

  ngOnInit() {
    this.tenderId = this.route.snapshot.parent?.params['id']
    this.getMytenderOffer()
  }
  getMytenderOffer() {
    this.subs.add(
      this.TendersService.getMytendersoffers(this.tenderId).subscribe({
        next: (tender) => {
          this.offers = tender.data
          this.hasoffer = tender.data.length
        }
      })
    )
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
