import { Component, input } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-tabs-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tabs-button.component.html',
  styleUrl: './tabs-button.component.scss'
})
export class TabsButtonComponent {
  routerLink = input<string>()
  tabsArray = input<{ name: string; link: string }[]>()
}
