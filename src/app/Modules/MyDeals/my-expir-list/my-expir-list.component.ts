import { Component, OnDestroy, OnInit } from '@angular/core'
import { EssentialDetailsComponent } from '../../../Theme/component/essential-details/essential-details.component'
import { ToastrService } from 'ngx-toastr'
import { ExpirationService } from '../../../Core/services/expiration/expiration.service'
import { ApiResponse } from '../../../Core/Interface/api-response'
import { NgxPaginationModule } from 'ngx-pagination'
import { SubSink } from 'subsink'
import { Router } from '@angular/router'
import { expireItem } from '../../../Core/Interface/expire'

@Component({
  selector: 'app-my-expir-list',
  standalone: true,
  imports: [EssentialDetailsComponent, NgxPaginationModule],
  templateUrl: './my-expir-list.component.html',
  styleUrl: './my-expir-list.component.scss'
})
export class MyExpirListComponent implements OnDestroy, OnInit {
  private subs = new SubSink()
  expirelist: expireItem[] = []
  itemsPerPage: number = 15
  currentPage: number = 1
  totalItems!: number
  constructor(
    private toastr: ToastrService,
    private ExpirationService: ExpirationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getMyexpire()
  }
  getMyexpire() {
    this.subs.add(
      this.ExpirationService.getMyexpire(this.currentPage).subscribe((r) => {
        this.expirelist = r.data
        this.itemsPerPage = r.meta.per_page
        this.totalItems = r.meta.total
      })
    )
  }
  addexpireTowhishList(event: any) {
    this.subs.add(
      this.ExpirationService.addexpireToWishlist(event.id).subscribe(
        (res: ApiResponse<{ is_favorite: boolean }>) => {
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
    this.getMyexpire()
  }
  expireControl(id: number) {
    this.router.navigate([`/myDeals/${id}/expire-control/expire-detail-form`])
  }
  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
