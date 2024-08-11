import { NgFor, NgIf } from '@angular/common'
import { Component, OnDestroy, ViewChild, model, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { ExpirationService } from '../../../Core/services/expiration/expiration.service'
import { SubSink } from 'subsink'
import { FormsModule, NgForm } from '@angular/forms'
import { RecordComponent } from '../../../Theme/component/record/record.component'
import { Pagerecord } from '../../../Core/Interface/record'

@Component({
  selector: 'app-expire-details',
  standalone: true,
  imports: [NgIf, FormsModule, RecordComponent, NgFor],
  templateUrl: './expire-details.component.html',
  styleUrl: './expire-details.component.scss'
})
export class ExpireDetailsComponent implements OnDestroy, OnInit {
  expireDetail!: any
  inWishList = model<boolean>(false)
  private subs = new SubSink()
  @ViewChild('f') form!: NgForm

  tender_specifications_file: any
  tender_images: any
  imageUrl: any = []
  fileNmae!: string
  otherfile!: string
  pdfSrc!: string
  expireId!: number
  addOffer: boolean = false
  record: Pagerecord[] = []
  otherfileType: string = ''
  myExpire: boolean = false
  OfferImageUrl: any = []
  offer_images: any
  offerImageChange: boolean = false
  offerFileChange: boolean = false
  offerFile_fileType: string = ''
  offerFile!: string
  offer_File!: string
  constructor(
    private route: ActivatedRoute,
    private ExpirationService: ExpirationService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.expireId = this.route.snapshot.params['id']
    this.getDetails()
    this.record = [
      {
        pageName: 'الصفحه الرئيسيه',
        router: '/home'
      },
      {
        pageName: 'تصفيات و هوالك دورية',
        router: '/expiration/expire'
      },
      {
        pageName: 'تفاصيل الصفقه',
        router: `/expiration/${this.expireId}/details`
      }
    ]
  }

  getDetails() {
    this.subs.add(
      this.ExpirationService.getExpireDetails(this.expireId).subscribe((expire) => {
        this.expireDetail = expire.data
        this.imageUrl = expire.data.expiration_images
        this.otherfile = expire.data.expiration_files[0].media
        this.otherfileType = this.otherfile?.includes('docx') ? 'docx' : this.otherfile?.includes('pdf') ? 'pdf' : 'txt'
        if (expire.data.is_favorite) {
          this.inWishList.update(() => true)
        }
      })
    )
  }
  handleWhishlist() {
    this.inWishList.update((e) => !e)
  }
  transformDate(date: any) {
    const create = new Date(date)
    const current = new Date()
    const diff = current.getTime() - create.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    return days
  }
  addTenderTowhishList(event: any) {
    this.handleWhishlist()

    this.subs.add(
      this.ExpirationService.addexpireToWishlist(event).subscribe(
        (res) => {
          if (res.data.is_favorite) {
            this.inWishList.update(() => true)
            this.toastr.success(res.messages)
          } else {
            this.inWishList.update(() => false)
            this.toastr.success('Removed From your wishList')
          }
        },

        (error) => {
          this.toastr.error(error.error.message)
        }
      )
    )
  }
  navigateToDocument(link: any) {
    if (typeof link === 'string') {
      window.open(link, '_blank')
      return
    }
    const file = link
    const reader = new FileReader()
    reader.onload = () => {
      const newWindow = window.open()
      if (newWindow) {
        newWindow.document.write('<html><body>')
        newWindow.document.write(
          '<iframe src="' + reader.result + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>'
        )
        newWindow.document.write('</body></html>')
      } else {
        alert('Please allow popups for this website.')
      }
    }
    reader.readAsDataURL(file)
  }

  onFileSelected(event: any, identifier?: string) {
    const file = event.target.files[0]

    if (event.target.files.length > 1) {
      Array.from(event.target.files).forEach((e: any) => {
        this.handleFile(e, identifier)
      })
    } else {
      this.handleFile(file, identifier)
    }
  }
  handleFile(file: any, identifier?: string) {
    if (file) {
      const reader = new FileReader()
      reader.onload = (e: any) => {
        if (identifier === 'image') {
          if (this.imageUrl.length < 4) {
            this.imageUrl = [...new Set([...this.imageUrl, e.target.result])]
            if (this.tender_images > 0) {
              this.tender_images = [...new Set([...this.tender_images, file])]
            } else {
              this.tender_images = [file]
            }
          } else {
            this.toastr.error('4 يجب الا يزيد عدد الصور عن ')
          }
        }
        if (identifier === 'Offerimage') {
          if (this.OfferImageUrl.length < 4) {
            this.OfferImageUrl = [...new Set([...this.OfferImageUrl, e.target.result])]
            if (this.offer_images > 0) {
              this.offer_images = [...new Set([...this.tender_images, file])]
            } else {
              this.offer_images = [file]
            }
          } else {
            this.toastr.error('4 يجب الا يزيد عدد الصور عن ')
          }

          this.offerImageChange = true
        }

        if (identifier === 'Offerfile') {
          this.offer_File = file
          this.offerFile = file
          this.offerFile_fileType = file.name?.includes('docx') ? 'docx' : file.name?.includes('pdf') ? 'pdf' : 'txt'
          this.offerFileChange = true
        }
      }
      reader.readAsDataURL(file)
    }
  }
  submitOffer() {
    this.addOffer = true
    if (this.form?.valid) {
      const formData = new FormData()
      if (this.offer_images) {
        this.offer_images.forEach((img: any, i: number) => {
          formData.append(`images[${i}]`, img)
        })
      }
      formData.append('files[]', this.offer_File)
      formData.append('desc', this.form.form.get('desc')?.value)
      this.ExpirationService.addexpireOffer(formData, this.expireId).subscribe(
        (res) => {
          this.addOffer = false
          const message = res.message == '' ? 'تم  الاضافه بنجاح' : res.message
          this.toastr.success(message)
        },

        (error) => {
          this.toastr.error(error.error?.message || error)
        }
      )
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
