import { Pagerecord } from './../../../Core/Interface/record'
import { Component, Input } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './record.component.html',
  styleUrl: './record.component.scss'
})
export class RecordComponent {
  constructor() {}
  @Input() record: Pagerecord[] = []
}
