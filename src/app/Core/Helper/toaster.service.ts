import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class toastrHelper {
  constructor() {}

  updateToastPosition(newTopValue: number) {
    const topValue = newTopValue + 140 + 'px'
    const element = document.querySelector('.toast-center') as HTMLElement
    if (element) {
      element.style.top = topValue
    }
  }
}
