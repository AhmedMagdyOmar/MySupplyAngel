import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { TabsButtonComponent } from '../../../Theme/component/tabs-button/tabs-button.component'

@Component({
  selector: 'app-my-deals',
  standalone: true,
  imports: [RouterOutlet, TabsButtonComponent],
  templateUrl: './my-deals.component.html',
  styleUrl: './my-deals.component.scss'
})
export class MyDealsComponent {
  tabsArray = [
    { name: 'مناقصاتي', link: 'my-tenders' },
    { name: 'تصفيات و هوالك دورية', link: 'my-expire' },
    { name: 'وكالات و توزيع', link: 'my-agent' }
  ]
  constructor() {}
}
