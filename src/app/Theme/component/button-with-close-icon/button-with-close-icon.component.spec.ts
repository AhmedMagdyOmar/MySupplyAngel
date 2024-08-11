import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ButtonWithCloseIconComponent } from './button-with-close-icon.component'

describe('ButtonWithCloseIconComponent', () => {
  let component: ButtonWithCloseIconComponent
  let fixture: ComponentFixture<ButtonWithCloseIconComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonWithCloseIconComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ButtonWithCloseIconComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
