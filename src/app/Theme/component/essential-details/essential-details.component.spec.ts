import { ComponentFixture, TestBed } from '@angular/core/testing'

import { EssentialDetailsComponent } from './essential-details.component'

describe('EssentialDetailsComponent', () => {
  let component: EssentialDetailsComponent
  let fixture: ComponentFixture<EssentialDetailsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssentialDetailsComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(EssentialDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
