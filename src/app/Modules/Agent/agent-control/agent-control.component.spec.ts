import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AgentControlComponent } from './agent-control.component'

describe('AgentControlComponent', () => {
  let component: AgentControlComponent
  let fixture: ComponentFixture<AgentControlComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentControlComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(AgentControlComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
