import { ToastrService } from 'ngx-toastr'
import { Tender } from '../../../Core/Interface/tender'
import { InfoDetailsComponent } from '../../../Theme/component/info-details/info-details.component'
import { TendersService } from './../../../Core/services/tenders/tenders.service'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { NgxPaginationModule } from 'ngx-pagination'
import { SubSink } from 'subsink'

@Component({
  selector: 'app-whish-list-tender',
  standalone: true,
  imports: [InfoDetailsComponent, NgxPaginationModule],
  templateUrl: './whish-list-tender.component.html',
  styleUrl: './whish-list-tender.component.scss'
})
export class WhishListTenderComponent implements OnInit, OnDestroy {
  itemsPerPage: number = 15
  currentPage: number = 1
  totalItems!: number
  private subs = new SubSink()
  constructor(
    private TendersService: TendersService,
    private toastr: ToastrService
  ) {}
  tendersList: Tender[] = []

  ngOnInit(): void {
    this.getTenders()
  }
  getTenders() {
    this.subs.add(
      this.TendersService.getFavouriteTenders(this.currentPage).subscribe((tender) => {
        this.tendersList = tender.data
        this.itemsPerPage = tender.meta.per_page
        this.totalItems = tender.meta.total
      })
    )
  }

  addTenderTowhishList(event: any) {
    this.subs.add(
      this.TendersService.addTenderToWishlist(event.id).subscribe(
        (res) => {
          this.getTenders()
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
    this.getTenders()
  }
  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
