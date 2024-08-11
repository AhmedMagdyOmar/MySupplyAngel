import { Component, Input } from '@angular/core'
import { SafePipePipe } from '../../../Core/pipe/safe-pipe.pipe'
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-offer-card',
  standalone: true,
  imports: [SafePipePipe, NgIf],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.scss'
})
export class OfferCardComponent {
  @Input() offer: any
  downloadFile(file: any) {
    // const fileFormat=this.otherfile.split('.')

    const fileName = `example.png`

    // Create a link element
    const newFile = new Blob([file], { type: 'text/plain' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(newFile)

    // Set the href and download attributes for the link
    link.href = url
    link.download = fileName

    // Append the link to the body (required for Firefox)
    document.body.appendChild(link)

    // Programmatically click the link to trigger the download
    link.click()

    // Remove the link from the document
    document.body.removeChild(link)

    // Revoke the object URL to free up memory
    URL.revokeObjectURL(url)
  }
  handlefileType(offer: any) {
    return offer?.includes('docx') ? 'docx' : offer?.includes('pdf') ? 'pdf' : 'txt'
  }
  navigateToDocument(link: string) {
    if (typeof link === 'string') {
      window.open(link, '_blank')
    } else {
      this.downloadFile(link)
    }
  }
}
