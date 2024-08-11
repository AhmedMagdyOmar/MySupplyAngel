import { SubSink } from 'subsink'
import { SubscribePlanService } from './../../Core/services/SubscribePlans/subscribe-plan.service'
import { Component, OnInit } from '@angular/core'
import { Package } from '../../Core/Interface/subscribePlan'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-price-plans',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './price-plans.component.html',
  styleUrl: './price-plans.component.scss'
})
export class PricePlansComponent implements OnInit {
  private subs = new SubSink()
  subscribePlans!: Package[]
  chosenPlan: Package | undefined
  payWay: string = 'vodafoneCash'
  constructor(private SubscribePlanService: SubscribePlanService) {}

  ngOnInit(): void {
    this.getPlans()
  }
  getPlans() {
    this.subs.add(
      this.SubscribePlanService.getPlans().subscribe((plan) => {
        this.subscribePlans = plan.data
      })
    )
  }
  getThisPlan(id: number) {
    this.chosenPlan = this.subscribePlans.find((plan) => plan.id === id)
  }
}
