import { Component, input } from '@angular/core'

@Component({
  selector: 'app-button-with-close-icon',
  standalone: true,
  imports: [],
  templateUrl: './button-with-close-icon.component.html',
  styleUrl: './button-with-close-icon.component.scss'
})
export class ButtonWithCloseIconComponent {
  addText = input<string>('')
}
