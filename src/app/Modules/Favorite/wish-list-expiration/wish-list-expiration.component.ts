import { ToastrService } from 'ngx-toastr'
import { ApiResponse } from '../../../Core/Interface/api-response'
import { expireItem } from '../../../Core/Interface/expire'
import { EssentialDetailsComponent } from '../../../Theme/component/essential-details/essential-details.component'
import { ExpirationService } from './../../../Core/services/expiration/expiration.service'
import { Component, OnInit, OnDestroy } from '@angular/core'
import { NgxPaginationModule } from 'ngx-pagination'
import { SubSink } from 'subsink'

@Component({
  selector: 'app-wish-list-expiration',
  standalone: true,
  imports: [EssentialDetailsComponent, NgxPaginationModule],
  templateUrl: './wish-list-expiration.component.html',
  styleUrl: './wish-list-expiration.component.scss'
})
export class WishListExpirationComponent implements OnInit, OnDestroy {
  private subs = new SubSink()
  expireList: expireItem[] = []
  itemsPerPage: number = 15
  currentPage: number = 1
  totalItems!: number
  constructor(
    private ExpirationService: ExpirationService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getExpireLisT()
  }

  getExpireLisT() {
    this.subs.add(
      this.ExpirationService.getFavouriteExpire(this.currentPage).subscribe((expire) => {
        this.expireList = expire.data
        this.itemsPerPage = expire.meta.per_page
        this.totalItems = expire.meta.total
      })
    )
  }

  addexpireTowhishList(event: any) {
    this.subs.add(
      this.ExpirationService.addexpireToWishlist(event.id).subscribe(
        (res: ApiResponse<{ is_favorite: boolean }>) => {
          this.getExpireLisT()
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
    this.getExpireLisT()
  }
  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
