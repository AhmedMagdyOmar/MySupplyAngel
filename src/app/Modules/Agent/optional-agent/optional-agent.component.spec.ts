import { ComponentFixture, TestBed } from '@angular/core/testing'

import { OptionalAgentComponent } from './optional-agent.component'

describe('OptionalAgentComponent', () => {
  let component: OptionalAgentComponent
  let fixture: ComponentFixture<OptionalAgentComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionalAgentComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(OptionalAgentComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
