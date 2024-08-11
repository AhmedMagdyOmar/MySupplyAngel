import { Component, OnInit, input, output } from '@angular/core'
import { FormsModule, NgForm } from '@angular/forms'
import { SubSink } from 'subsink'
import { CategoryService } from '../../../Core/services/categoryService/category.service'
import { CategoryList } from '../../../Core/Interface/category'
import { CountryService } from '../../../Core/services/CountryService/country.service'
import { Country } from '../../../Core/Interface/countries'

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent implements OnInit {
  private subs = new SubSink()
  searchPlaceHolder = input<string>()
  searchButtonName = input<string>('بحث')
  addSelectBox = input<boolean>(true)
  searchObj = output<any>()
  categoryList!: CategoryList[]
  countries: Country[] = []
  createSetTimeOut: any
  constructor(
    private CategoryService: CategoryService,
    private CountryService: CountryService
  ) {}

  ngOnInit() {
    this.getCategories()
    this.getCountry()
  }
  getCategories(searchObj?: any) {
    this.subs.add(
      this.CategoryService.getCategoryList(searchObj).subscribe((category) => {
        this.categoryList = category.data
      })
    )
  }
  getCountry() {
    this.CountryService.getCountries().subscribe((res) => {
      this.countries = res.data
    })
  }
  changeSearch(form: NgForm) {
    clearTimeout(this.createSetTimeOut)
    this.createSetTimeOut = setTimeout(() => {
      if (form.form?.value?.keyword == '') {
        this.submitSearch(form)
      }
    }, 500)
  }
  submitSearch(form: NgForm) {
    this.searchObj.emit(form.form.value)
  }
}
