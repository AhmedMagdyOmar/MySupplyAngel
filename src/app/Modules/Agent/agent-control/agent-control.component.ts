import { Component, OnInit } from '@angular/core'
import { TabsButtonComponent } from '../../../Theme/component/tabs-button/tabs-button.component'
import { ActivatedRoute, RouterOutlet } from '@angular/router'
import { AgentService } from '../../../Core/services/agent/agent.service'

@Component({
  selector: 'app-agent-control',
  standalone: true,
  imports: [RouterOutlet, TabsButtonComponent],
  templateUrl: './agent-control.component.html',
  styleUrl: './agent-control.component.scss'
})
export class AgentControlComponent implements OnInit {
  tabsArray = [{ name: 'تعديل الوكاله ', link: 'agent-detail-form' }]

  myAgent: boolean = false
  agentId!: number

  constructor(
    private route: ActivatedRoute,
    private agentService: AgentService
  ) {}
  ngOnInit(): void {
    this.agentId = this.route.snapshot.params['id']
    this.agentService.getAgentDetails(this.agentId).subscribe((Mytender) => {
      this.myAgent = Mytender.data.is_my_agent
      if (this.myAgent) {
        this.tabsArray = [
          { name: 'تعديل الوكاله ', link: 'agent-detail-form' },
          { name: 'العروض المستلمة', link: 'my-agent-offer' }
        ]
      } else {
        this.tabsArray = [{ name: 'تعديل الوكاله ', link: 'agent-detail-form' }]
      }
    })
  }
}
