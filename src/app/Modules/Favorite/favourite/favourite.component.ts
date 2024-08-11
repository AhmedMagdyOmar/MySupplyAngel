import { Component } from '@angular/core'
import { TabsButtonComponent } from '../../../Theme/component/tabs-button/tabs-button.component'
import { RouterOutlet } from '@angular/router'
import { RecordComponent } from '../../../Theme/component/record/record.component'

@Component({
  selector: 'app-favourite',
  standalone: true,
  imports: [RecordComponent, TabsButtonComponent, RouterOutlet],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.scss'
})
export class FavouriteComponent {
  record = [
    {
      pageName: 'الصفحه الرئيسيه',
      router: '/home'
    },
    {
      pageName: 'المفضلة',
      router: '/favorite/wishList'
    }
  ]
  tabsArray = [
    { name: 'المناقصات', link: 'wishListTender' },
    { name: 'تصفيات و هوالك دورية', link: 'WishListExpire' },
    { name: 'وكلاء و موزعين', link: 'WishListagent' }
  ]
}
