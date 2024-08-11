import { toastrHelper } from './../../Core/Helper/toaster.service'
import { TendersService } from './../../Core/services/tenders/tenders.service'
import { Category } from './../../Core/Interface/home'
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ElementRef, PLATFORM_ID, Inject, OnDestroy } from '@angular/core'
import { NgIf, isPlatformBrowser } from '@angular/common'
import { ActivatedRoute, RouterModule } from '@angular/router'
import { HomeService } from '../../Core/services/homeServices/home.service'
import { Client, Service, Tender } from '../../Core/Interface/home'
import { InfoDetailsComponent } from '../../Theme/component/info-details/info-details.component'
import { ImageViewComponent } from '../../Theme/component/image-view/image-view.component'
import { SearchInputComponent } from '../../Theme/component/search-input/search-input.component'
import { ToastrService } from 'ngx-toastr'
import { SubSink } from 'subsink'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, RouterModule, InfoDetailsComponent, ImageViewComponent, SearchInputComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit, OnDestroy {
  private subs = new SubSink()
  isLogin: boolean = true
  tendersList: Tender[] = []
  dataLoad: boolean = false
  categories: Category[] = []
  services: Service[] = []
  clients: Client[] = []
  searchObj: any

  constructor(
    private HomeService: HomeService,
    private TendersService: TendersService,
    private toastr: ToastrService,
    private toastrHelper: toastrHelper,
    private route: ActivatedRoute,
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    if (isPlatformBrowser(platformId) && typeof window !== 'undefined') {
      this.route.data.subscribe((data) => {
        this.isLogin = data['server']
      })
    }
  }

  ngOnInit() {
    this.route.fragment.subscribe((res) => {
      if (res != null) {
        setTimeout(() => {
          const element = this.elementRef.nativeElement.querySelector(`#${res}`)
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
            })
            const scrollPosition = element.offsetTop - 100
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
          }
        }, 1000)
      }
    })

    this.getHomeList()
    this.getAlltenders()
  }

  getHomeList() {
    this.subs.add(
      this.HomeService.getHomeList().subscribe((res) => {
        this.categories = res.data.categories.slice(0, 16)
        this.services = res.data.our_services.slice(0, 4)
        this.clients = res.data.our_clients
      })
    )
  }

  getAlltenders() {
    this.subs.add(
      this.TendersService.getAllTenders(this.searchObj, 1).subscribe((tender) => {
        this.tendersList = tender.data.slice(0, 5)
        this.dataLoad = true
      })
    )
  }
  addTenderTowhishList(event: any, id: number) {
    this.TendersService.addTenderToWishlist(event.id).subscribe(
      (res) => {
        if (res.data.is_favorite) {
          this.toastr.success(res.messages)
          this.tendersList[id].is_favorite = true
        } else {
          this.toastr.success('Removed From your wishList')
          this.tendersList[id].is_favorite = false
        }
      },

      (error) => {
        this.toastr.error(error.error.message)
      }
    )
  }
  handleSearchObj(searchObj: any) {
    this.searchObj = {
      ...searchObj
    }
    this.getAlltenders()
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
