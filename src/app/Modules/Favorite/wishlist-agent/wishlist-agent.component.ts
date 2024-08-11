import { Component, OnDestroy, OnInit } from '@angular/core'
import { AgentService } from '../../../Core/services/agent/agent.service'
import { ToastrService } from 'ngx-toastr'
import { CardDetailsComponent } from '../../../Theme/component/card-details/card-details.component'
import { NgxPaginationModule } from 'ngx-pagination'
import { SubSink } from 'subsink'

@Component({
  selector: 'app-wishlist-agent',
  standalone: true,
  imports: [CardDetailsComponent, NgxPaginationModule],
  templateUrl: './wishlist-agent.component.html',
  styleUrl: './wishlist-agent.component.scss'
})
export class WishlistAgentComponent implements OnDestroy, OnInit {
  private subs = new SubSink()
  agentList: any[] = []
  itemsPerPage: number = 15
  currentPage: number = 1
  totalItems!: number
  constructor(
    private agentService: AgentService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getAgentLisT()
  }

  getAgentLisT() {
    this.subs.add(
      this.agentService.getFavouriteAgent(this.currentPage).subscribe((agent) => {
        this.agentList = agent.data
        this.itemsPerPage = agent.meta.per_page
        this.totalItems = agent.meta.total
      })
    )
  }

  addAgentTowhishList(event: any) {
    this.subs.add(
      this.agentService.addAgenToFavorite(event.id).subscribe(
        (res) => {
          this.getAgentLisT()
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
  handlePagination(pagination: any) {
    this.currentPage = pagination
    this.getAgentLisT()
  }
  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
