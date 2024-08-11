import { Component, OnInit, signal } from '@angular/core'
import { TabsButtonComponent } from '../../../Theme/component/tabs-button/tabs-button.component'
import { RouterModule } from '@angular/router'
import { AuthService } from '../../../Core/services/authService/auth.service'
import { RecordComponent } from '../../../Theme/component/record/record.component'

@Component({
  selector: 'app-agent',
  standalone: true,
  imports: [TabsButtonComponent, RouterModule, RecordComponent],
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.scss'
})
export class AgentComponent implements OnInit {
  userLoginStatus = signal<boolean>(false)
  tabsArray = [
    { name: 'مطلوب وكيل او موزع', link: 'require-agent' },
    { name: 'وكلاء او موزعين محتملين', link: 'optional-agent' }
  ]
  record = [
    {
      pageName: 'الصفحه الرئيسيه',
      router: '/home'
    },
    {
      pageName: 'الوكلاء و الموزعين',
      router: '/agent/require-agent'
    }
  ]
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.UserSignIn.subscribe((status) => {
      if (status != null) {
        this.userLoginStatus.update(() => true)
      } else {
        this.userLoginStatus.update(() => false)
      }
    })
  }
}
