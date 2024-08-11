import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MyTendersComponent } from './my-tenders.component'

describe('MyTendersComponent', () => {
  let component: MyTendersComponent
  let fixture: ComponentFixture<MyTendersComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTendersComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(MyTendersComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
