import { AgentService } from './../../../Core/services/agent/agent.service'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { CardDetailsComponent } from '../../../Theme/component/card-details/card-details.component'
import { NgxPaginationModule } from 'ngx-pagination'
import { SubSink } from 'subsink'
import { Router } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { RequiredAgent } from '../../../Core/Interface/agent.model'

@Component({
  selector: 'app-my-agent-distributor',
  standalone: true,
  imports: [CardDetailsComponent, NgxPaginationModule, FormsModule],
  templateUrl: './my-agent-distributor.component.html',
  styleUrl: './my-agent-distributor.component.scss'
})
export class MyAgentDistributorComponent implements OnDestroy, OnInit {
  private subs = new SubSink()
  agentList: RequiredAgent[] = []
  itemsPerPage: number = 15
  currentPage: number = 1
  totalItems!: number
  filter: string = 'MyTenders'
  constructor(
    private toastr: ToastrService,
    private agentService: AgentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getMyagent()
  }
  getMyagent() {
    if (this.filter === 'MyTenders') {
      this.subs.add(
        this.agentService.getMyagent(this.currentPage).subscribe((r) => {
          this.agentList = r.data
          this.itemsPerPage = r.meta.per_page
          this.totalItems = r.meta.total
        })
      )
    } else {
      this.agentService.getMyagentWhereIaddOffer(this.currentPage).subscribe((r) => {
        this.agentList = r.data
      })
    }
  }
  addAgentTowhishList(event: any) {
    this.subs.add(
      this.agentService.addAgenToFavorite(event.id).subscribe(
        (res) => {
          if (res.data.is_favorite) {
            this.toastr.success(res.messages)
          } else {
            this.toastr.success('Removed From your wishList')
          }
        },

        (error) => {
          this.toastr.error(error.error.message)
        }
      )
    )
  }
  agentControl(tenderId: number) {
    this.router.navigate([`/myDeals/${tenderId}/agent-control/agent-detail-form`])
  }
  handlePagination(pagination: any) {
    this.currentPage = pagination
    this.getMyagent()
  }
  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
