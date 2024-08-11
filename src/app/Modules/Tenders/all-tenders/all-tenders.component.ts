import { Tender } from '../../../Core/Interface/home'
import { TendersService } from '../../../Core/services/tenders/tenders.service'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { InfoDetailsComponent } from '../../../Theme/component/info-details/info-details.component'
import { ToastrService } from 'ngx-toastr'
import { SearchInputComponent } from '../../../Theme/component/search-input/search-input.component'
import { SearchObj } from '../../../Core/Interface/search-obj'
import { NgxPaginationModule } from 'ngx-pagination'
import { SubSink } from 'subsink'
import { RecordComponent } from '../../../Theme/component/record/record.component'

@Component({
  selector: 'app-all-tenders',
  standalone: true,
  imports: [InfoDetailsComponent, SearchInputComponent, NgxPaginationModule, RecordComponent],
  templateUrl: './all-tenders.component.html',
  styleUrl: './all-tenders.component.scss'
})
export class AllTendersComponent implements OnInit, OnDestroy {
  private subs = new SubSink()
  record = [
    {
      pageName: 'الصفحه الرئيسيه',
      router: '/home'
    },
    {
      pageName: 'سجل المناقصات',
      router: '/tenders/all-tenders'
    }
  ]
  itemsPerPage: number = 15
  currentPage: number = 1
  totalItems!: number
  constructor(
    private TendersService: TendersService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.getAlltenders()
  }
  tendersList: Tender[] = []
  searchObj!: SearchObj
  getAlltenders() {
    this.subs.add(
      this.TendersService.getAllTenders(this.searchObj, this.currentPage).subscribe((tender) => {
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
    this.getAlltenders()
  }
  handlePagination(pagination: any) {
    this.currentPage = pagination
    this.getAlltenders()
  }
  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
