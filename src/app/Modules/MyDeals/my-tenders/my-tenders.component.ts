import { Component, OnDestroy, OnInit } from '@angular/core'
import { TendersService } from '../../../Core/services/tenders/tenders.service'
import { Tender } from '../../../Core/Interface/tender'
import { InfoDetailsForReviewComponent } from '../../../Theme/component/info-details-for-review/info-details-for-review.component'
import { NgxPaginationModule } from 'ngx-pagination'
import { SubSink } from 'subsink'
import { Router } from '@angular/router'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-my-tenders',
  standalone: true,
  imports: [InfoDetailsForReviewComponent, NgxPaginationModule, FormsModule],
  templateUrl: './my-tenders.component.html',
  styleUrl: './my-tenders.component.scss'
})
export class MyTendersComponent implements OnDestroy, OnInit {
  private subs = new SubSink()
  itemsPerPage: number = 15
  currentPage: number = 1
  totalItems!: number
  tendersList: Tender[] = []
  filter: string = 'MyTenders'
  addPagination: boolean = false
  constructor(
    private TendersService: TendersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getMytender()
  }
  getMytender() {
    if (this.filter === 'MyTenders') {
      this.subs.add(
        this.TendersService.getMytenders(this.currentPage).subscribe((r) => {
          this.tendersList = r.data
          if (r.meta) {
            this.itemsPerPage = r.meta.per_page
            this.totalItems = r.meta.total
            this.addPagination = true
          } else {
            this.addPagination = false
          }
        })
      )
    } else {
      this.subs.add(
        this.TendersService.gettenderWhereIaddOffer().subscribe((r) => {
          this.tendersList = r.data
          if (r.meta) {
            this.itemsPerPage = r.meta.per_page
            this.totalItems = r.meta.total
            this.addPagination = true
          } else {
            this.addPagination = false
          }
        })
      )
    }
  }
  handlePagination(pagination: any) {
    this.currentPage = pagination
    this.getMytender()
  }
  tenderControl(tenderId: number) {
    this.router.navigate([`/myDeals/${tenderId}/tender-control/tender-detail-form`])
  }
  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
