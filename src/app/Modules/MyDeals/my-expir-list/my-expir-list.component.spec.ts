import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MyExpirListComponent } from './my-expir-list.component'

describe('MyExpirListComponent', () => {
  let component: MyExpirListComponent
  let fixture: ComponentFixture<MyExpirListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyExpirListComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(MyExpirListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
