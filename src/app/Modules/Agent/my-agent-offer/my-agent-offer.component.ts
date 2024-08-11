import { AgentService } from './../../../Core/services/agent/agent.service'
import { NgIf } from '@angular/common'
import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { SubSink } from 'subsink'
import { SafePipePipe } from '../../../Core/pipe/safe-pipe.pipe'
import { OfferCardComponent } from '../../../Theme/component/offer-card/offer-card.component'

@Component({
  selector: 'app-my-agent-offer',
  standalone: true,
  imports: [SafePipePipe, NgIf, OfferCardComponent],
  templateUrl: './my-agent-offer.component.html',
  styleUrl: './my-agent-offer.component.scss'
})
export class MyAgentOfferComponent implements OnInit, OnDestroy {
  private subs = new SubSink()
  agentId!: number
  hasoffer: boolean = false

  offers: any
  constructor(
    private route: ActivatedRoute,
    private agentService: AgentService
  ) {}

  ngOnInit() {
    this.agentId = this.route.snapshot.parent?.params['id']
    this.getMyagentoffers()
  }
  getMyagentoffers() {
    this.subs.add(
      this.agentService.getMyagentoffers(this.agentId).subscribe({
        next: (agent) => {
          this.offers = agent.data
          this.hasoffer = agent.data.length > 0
        }
      })
    )
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
