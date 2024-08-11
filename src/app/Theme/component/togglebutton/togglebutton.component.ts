import { NgStyle } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-togglebutton',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './togglebutton.component.html',
  styleUrl: './togglebutton.component.scss'
})
export class TogglebuttonComponent {
  @Input() condition: boolean = false
  @Input() label!: string
  @Input() disabled: boolean = false
  @Output() emitToggleCondition = new EventEmitter<boolean>()
  constructor() {}

  changeCodition() {
    if (!this.disabled) {
      this.condition = !this.condition
      this.emitToggleCondition.emit(this.condition)
    }
  }
}
