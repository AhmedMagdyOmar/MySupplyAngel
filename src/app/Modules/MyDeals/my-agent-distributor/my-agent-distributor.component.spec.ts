import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MyAgentDistributorComponent } from './my-agent-distributor.component'

describe('MyAgentDistributorComponent', () => {
  let component: MyAgentDistributorComponent
  let fixture: ComponentFixture<MyAgentDistributorComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAgentDistributorComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(MyAgentDistributorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
