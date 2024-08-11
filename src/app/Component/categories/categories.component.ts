import { Component, OnDestroy, OnInit } from '@angular/core'
import { SearchInputComponent } from '../../Theme/component/search-input/search-input.component'
import { CategoryService } from '../../Core/services/categoryService/category.service'
import { SubSink } from 'subsink'
import { CategoryList } from '../../Core/Interface/category'
import { ImageViewComponent } from '../../Theme/component/image-view/image-view.component'
import { RouterLink } from '@angular/router'
import { SearchObj } from '../../Core/Interface/search-obj'
import { RecordComponent } from '../../Theme/component/record/record.component'

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [SearchInputComponent, RecordComponent, ImageViewComponent, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit, OnDestroy {
  private subs = new SubSink()
  categoryList!: CategoryList[]
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
  constructor(private CategoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(searchObj?: any) {
    this.subs.add(
      this.CategoryService.getCategoryList(searchObj).subscribe((category) => {
        this.categoryList = category.data
      })
    )
  }
  handleSearchObj(searchObj: SearchObj) {
    this.getCategories(searchObj)
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
}
