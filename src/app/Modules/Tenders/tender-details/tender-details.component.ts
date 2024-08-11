import { TendersService } from './../../../Core/services/tenders/tenders.service'
import { Component, OnDestroy, OnInit, ViewChild, model } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Tender } from '../../../Core/Interface/tender'
import { NgIf, NgFor } from '@angular/common'
import { ToastrService } from 'ngx-toastr'
import { SubSink } from 'subsink'
import { FormsModule, NgForm } from '@angular/forms'
import { RecordComponent } from '../../../Theme/component/record/record.component'
import { Pagerecord } from '../../../Core/Interface/record'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-tender-details',
  standalone: true,
  imports: [NgIf, FormsModule, RecordComponent, NgFor, SweetAlert2Module],
  templateUrl: './tender-details.component.html',
  styleUrl: './tender-details.component.scss'
})
export class TenderDetailsComponent implements OnInit, OnDestroy {
  private subs = new SubSink()
  @ViewChild('f') form!: NgForm
  tenderDetail!: Tender
  inWishList = model<boolean>(false)

  tenderId!: number
  addOffer: boolean = false
  record: Pagerecord[] = []

  myTender: boolean = false
  tender_specifications_file: any
  tender_images: any
  fileNmae!: string
  pdfSrc!: string

  offerFile_fileType: string = ''
  offerFile!: string
  offer_File!: string

  otherfile!: string
  imageUrl: any = []
  specifications_file!: string
  specifications_fileType: string = ''
  otherfileType: string = ''
  OfferImageUrl: any = []
  offer_images: any = []
  offerImageChange: boolean = false
  offerFileChange: boolean = false
  alertOpen: boolean = false
  constructor(
    private route: ActivatedRoute,
    private TendersService: TendersService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.tenderId = this.route.snapshot.params['id']
    this.record = [
      {
        pageName: 'الصفحه الرئيسيه',
        router: '/home'
      },
      {
        pageName: 'المناقصات',
        router: '/tenders/all-tenders'
      },
      {
        pageName: 'تفاصيل الصفقه',
        router: `/tenders/${this.tenderId}/tender-details`
      }
    ]
    this.getDetails()
  }

  getDetails() {
    this.subs.add(
      this.TendersService.getTenderDetails(this.tenderId).subscribe((tender) => {
        this.tenderDetail = tender.data
        this.imageUrl = tender.data.tender_images
        this.specifications_file = tender.data.tender_specifications_file.media
        this.specifications_fileType = this.specifications_file?.includes('docx') ? 'docx' : this.specifications_file?.includes('pdf') ? 'pdf' : 'txt'
        this.otherfile = tender.data.tender_other_files[0].media
        this.otherfileType = this.otherfile?.includes('docx') ? 'docx' : this.otherfile?.includes('pdf') ? 'pdf' : 'txt'
        if (tender.data.is_favorite) {
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
      this.TendersService.addTenderToWishlist(event).subscribe(
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
            this.tender_images = [...new Set([...this.tender_images, file])]
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
    if (!this.alertOpen) {
      Swal.fire({
        icon: 'question',
        title: 'لايمكنك التعديل علي العرض بمجرد انشائه  !!',
        showConfirmButton: true,
        didClose: () => {
          this.alertOpen = true
          this.submitOffer()
        }
      })
      return
    }
    if (this.form?.valid) {
      const formData = new FormData()
      if (this.offer_images) {
        this.offer_images.forEach((img: any, i: number) => {
          formData.append(`images[${i}]`, img)
        })
      }
      formData.append('files[]', this.offer_File)
      formData.append('desc', this.form.form.get('desc')?.value)
      this.TendersService.addTendeOffer(formData, this.tenderId).subscribe(
        (res) => {
          this.addOffer = false
          const message = res.message == '' ? 'تم  الاضافه بنجاح' : res.message
          this.toastr.success(message)
        },

        (error) => {
          this.toastr.error(error.error.message)
        }
      )
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
