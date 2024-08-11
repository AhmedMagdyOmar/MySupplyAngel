import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { TabsButtonComponent } from '../../../Theme/component/tabs-button/tabs-button.component'

@Component({
  selector: 'app-expire-control',
  standalone: true,
  imports: [RouterOutlet, TabsButtonComponent],
  templateUrl: './expire-control.component.html',
  styleUrl: './expire-control.component.scss'
})
export class ExpireControlComponent {
  tabsArray = [{ name: 'بيانات الصفقة', link: 'expire-detail-form' }]
}
