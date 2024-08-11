import { CategoryService } from './../../Core/services/categoryService/category.service'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Tender } from '../../Core/Interface/home'
import { InfoDetailsComponent } from '../../Theme/component/info-details/info-details.component'
import { TendersService } from '../../Core/services/tenders/tenders.service'
import { ToastrService } from 'ngx-toastr'
import { SubSink } from 'subsink'
import { CategoryList } from '../../Core/Interface/category'
import { SearchInputComponent } from '../../Theme/component/search-input/search-input.component'
import { SearchObj } from '../../Core/Interface/search-obj'
import { NgxPaginationModule } from 'ngx-pagination'
import { TabsButtonComponent } from '../../Theme/component/tabs-button/tabs-button.component'
import { RecordComponent } from '../../Theme/component/record/record.component'

@Component({
  selector: 'app-list-category-tender',
  standalone: true,
  imports: [InfoDetailsComponent, SearchInputComponent, NgxPaginationModule, TabsButtonComponent, RecordComponent],
  templateUrl: './list-category-tender.component.html',
  styleUrl: './list-category-tender.component.scss'
})
export class ListCategoryTenderComponent implements OnInit, OnDestroy {
  private subs = new SubSink()
  tendersList: Tender[] = []
  categoryId: any
  itemsPerPage: number = 15
  currentPage: number = 1
  totalItems!: number
  categoryObject: any
  categoryList!: CategoryList[]
  searchObj: any
  dataNotFound: boolean = false
  record = [
    {
      pageName: 'الصفحه الرئيسيه',
      router: '/home'
    },
    {
      pageName: 'القطاعات',
      router: '/categories'
    }
  ]

  constructor(
    private route: ActivatedRoute,
    private CategoryService: CategoryService,
    private TendersService: TendersService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.categoryId = this.route.snapshot.params['id']
    this.searchObj = {
      category_id: this.categoryId
    }
    this.getCategories()
    this.getTenders()
  }
  getCategories() {
    this.subs.add(
      this.CategoryService.getCategoryList().subscribe((category) => {
        this.categoryList = category.data
        this.categoryObject = this.categoryList.find((categ) => categ.id == this.categoryId)
        this.record.push({
          pageName: this.categoryObject.name,
          router: `/categories/${this.categoryId}/tender`
        })
      })
    )
  }
  getTenders() {
    this.subs.add(
      this.CategoryService.getCategoryTender(this.searchObj, this.currentPage).subscribe((tender) => {
        ;(this.tendersList = tender.data), (this.dataNotFound = !this.tendersList.length)
        this.itemsPerPage = tender.meta.per_page
        this.totalItems = tender.meta.total
      })
    )
  }
  addTenderTowhishList(event: any) {
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
  }

  handleSearchObj(searchObj: SearchObj) {
    this.searchObj = {
      ...searchObj
    }
    this.categoryId = searchObj.category_id
    this.categoryObject = this.categoryList.find((categ) => categ.id == this.categoryId)
    this.record[2] = {
      pageName: this.categoryObject?.name,
      router: `/categories/${this.categoryId}/tender`
    }
    this.getTenders()
  }
  handlePagination(pagination: any) {
    this.currentPage = pagination
    this.getTenders()
  }
  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
