import { toastrHelper } from './../../../Core/Helper/toaster.service'
import { EssentialDetailsComponent } from './../../../Theme/component/essential-details/essential-details.component'
import { ExpirationService } from './../../../Core/services/expiration/expiration.service'
import { Component, OnInit, signal, OnDestroy } from '@angular/core'
import { SearchInputComponent } from '../../../Theme/component/search-input/search-input.component'
import { SubSink } from 'subsink'
import { ToastrService } from 'ngx-toastr'
import { expireItem } from '../../../Core/Interface/expire'
import { ApiResponse } from '../../../Core/Interface/api-response'
import { RouterModule } from '@angular/router'
import { SearchObj } from '../../../Core/Interface/search-obj'
import { AuthService } from '../../../Core/services/authService/auth.service'
import { NgxPaginationModule } from 'ngx-pagination'
import { RecordComponent } from '../../../Theme/component/record/record.component'

@Component({
  selector: 'app-expire-list',
  standalone: true,
  imports: [RecordComponent, SearchInputComponent, EssentialDetailsComponent, RouterModule, NgxPaginationModule],
  templateUrl: './expire-list.component.html',
  styleUrl: './expire-list.component.scss'
})
export class ExpireListComponent implements OnInit, OnDestroy {
  itemsPerPage: number = 15
  currentPage: number = 1
  totalItems!: number
  private subs = new SubSink()
  expireList: expireItem[] = []
  searchObj!: SearchObj
  userLoginStatus = signal<boolean>(false)
  record = [
    {
      pageName: 'الصفحه الرئيسيه',
      router: '/home'
    },
    {
      pageName: 'تصفيات و هوالك دورية',
      router: '/expiration/expire'
    }
  ]
  constructor(
    private ExpirationService: ExpirationService,
    private toastr: ToastrService,
    private toastrHelper: toastrHelper,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.getExpireList()
    this.authService.UserSignIn.subscribe((status) => {
      if (status != null) {
        this.userLoginStatus.update(() => true)
      } else {
        this.userLoginStatus.update(() => false)
      }
    })
  }

  getExpireList() {
    this.subs.add(
      this.ExpirationService.getExpireList(this.searchObj, this.currentPage).subscribe((expire) => {
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
    this.getExpireList()
  }
  handlePagination(pagination: any) {
    this.currentPage = pagination
    this.getExpireList()
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
}
