import { WhyUsService } from './../../Core/services/whyUs/why-us.service'
import { Component, OnInit } from '@angular/core'
import { WhyUsData } from '../../Core/Interface/whyUs'
import { RecordComponent } from '../../Theme/component/record/record.component'

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [RecordComponent],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss'
})
export class WhyUsComponent implements OnInit {
  constructor(private WhyUsService: WhyUsService) {}
  desc: WhyUsData = { why_us: '' }
  record = [
    {
      pageName: 'الصفحه الرئيسيه',
      router: '/home'
    },
    {
      pageName: 'لماذا نحن',
      router: '/whyUs'
    }
  ]
  ngOnInit(): void {
    this.whyUs()
  }

  whyUs() {
    this.WhyUsService.whyUs().subscribe((content) => {
      this.desc = content.data
    })
  }
}
