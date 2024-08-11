import { TendersService } from './../../../Core/services/tenders/tenders.service'
import { Component, OnInit } from '@angular/core'
import { TabsButtonComponent } from '../../../Theme/component/tabs-button/tabs-button.component'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-tender-control',
  standalone: true,
  imports: [TabsButtonComponent, RouterOutlet],
  templateUrl: './tender-control.component.html',
  styleUrl: './tender-control.component.scss'
})
export class TenderControlComponent implements OnInit {
  tabsArray: { name: string; link: string }[] = []
  myTender: boolean = false
  constructor(private tendersService: TendersService) {}
  ngOnInit() {
    this.tendersService.myTender.subscribe((Mytender) => {
      this.myTender = Mytender
      if (this.myTender) {
        this.tabsArray = [
          { name: 'بيانات الصفقة', link: 'tender-detail-form' },
          { name: 'العروض المستلمة', link: 'my-tender-offer' }
        ]
      } else {
        this.tabsArray = [{ name: 'بيانات الصفقة', link: 'tender-detail-form' }]
      }
    })
  }
}
