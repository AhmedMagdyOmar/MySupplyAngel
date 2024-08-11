import { Pipe, PipeTransform } from '@angular/core'
import { CategoryList } from '../Interface/category'

@Pipe({
  name: 'categorySearch',
  standalone: true
})
export class CategorySearchPipe implements PipeTransform {
  transform(category: CategoryList[], searchItem: string): CategoryList[] {
    if (searchItem) {
      return category.filter((item) => item.name.includes(searchItem))
    }
    return category
  }
}
