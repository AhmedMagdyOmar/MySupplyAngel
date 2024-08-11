import { NgxPaginationModule } from 'ngx-pagination'
import { Component, OnInit, OnDestroy } from '@angular/core'
import { SubSink } from 'subsink'
import { ToastrService } from 'ngx-toastr'
import { SearchInputComponent } from '../../../Theme/component/search-input/search-input.component'
import { CardDetailsComponent } from '../../../Theme/component/card-details/card-details.component'
import { AgentService } from '../../../Core/services/agent/agent.service'
import { SearchObj } from '../../../Core/Interface/search-obj'
import { RequiredAgent } from '../../../Core/Interface/agent.model'

@Component({
  selector: 'app-optional-agent',
  standalone: true,
  imports: [SearchInputComponent, CardDetailsComponent, NgxPaginationModule],
  templateUrl: './optional-agent.component.html',
  styleUrl: './optional-agent.component.scss'
})
export class OptionalAgentComponent implements OnInit, OnDestroy {
  itemsPerPage: number = 15
  currentPage: number = 1
  totalItems!: number
  private subs = new SubSink()
  agentList: RequiredAgent[] = []
  searchObj!: SearchObj
  constructor(
    private AgentService: AgentService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getoptionalAgentList()
  }

  getoptionalAgentList() {
    this.subs.add(
      this.AgentService.getoptionalAgent(this.searchObj, this.currentPage).subscribe((agent) => {
        ;(this.agentList = agent.data), (this.itemsPerPage = agent.meta.per_page)
        this.totalItems = agent.meta.total
      })
    )
  }

  addexpireTowhishList(event: any) {
    this.subs.add(
      this.AgentService.addAgenToFavorite(event.id).subscribe(
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
  handleSearchObj(searchObj: SearchObj) {
    this.searchObj = {
      ...searchObj
    }
    this.getoptionalAgentList()
  }

  handlePagination(pagination: any) {
    this.currentPage = pagination
    this.getoptionalAgentList()
  }
  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
