import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InfoDetailsForReviewComponent } from './info-details-for-review.component'

describe('InfoDetailsForReviewComponent', () => {
  let component: InfoDetailsForReviewComponent
  let fixture: ComponentFixture<InfoDetailsForReviewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDetailsForReviewComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(InfoDetailsForReviewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
