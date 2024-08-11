import { Component, input } from '@angular/core'

@Component({
  selector: 'app-image-view',
  standalone: true,
  imports: [],
  templateUrl: './image-view.component.html',
  styleUrl: './image-view.component.scss'
})
export class ImageViewComponent {
  details = input<any>()
}
