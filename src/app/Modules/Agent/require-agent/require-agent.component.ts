import { CardDetailsComponent } from './../../../Theme/component/card-details/card-details.component'
import { Component, OnInit, OnDestroy } from '@angular/core'
import { SearchInputComponent } from '../../../Theme/component/search-input/search-input.component'

import { ToastrService } from 'ngx-toastr'
import { SubSink } from 'subsink'
import { AgentService } from '../../../Core/services/agent/agent.service'
import { SearchObj } from '../../../Core/Interface/search-obj'
import { NgxPaginationModule } from 'ngx-pagination'
import { RequiredAgent } from '../../../Core/Interface/agent.model'

@Component({
  selector: 'app-require-agent',
  standalone: true,
  imports: [SearchInputComponent, CardDetailsComponent, NgxPaginationModule],
  templateUrl: './require-agent.component.html',
  styleUrl: './require-agent.component.scss'
})
export class RequireAgentComponent implements OnInit, OnDestroy {
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
    this.getRequiredAgentList()
  }

  getRequiredAgentList() {
    this.subs.add(
      this.AgentService.getRequiredAgent(this.searchObj, this.currentPage).subscribe((agent) => {
        this.agentList = agent.data
        this.itemsPerPage = agent.meta.per_page
        this.totalItems = agent.meta.total
      })
    )
  }

  addAgentTowhishList(event: any) {
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
    this.getRequiredAgentList()
  }
  handlePagination(pagination: any) {
    this.currentPage = pagination
    this.getRequiredAgentList()
  }
  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
