import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AgentDetailsFormComponent } from './agent-details-form.component'

describe('AgentDetailsFormComponent', () => {
  let component: AgentDetailsFormComponent
  let fixture: ComponentFixture<AgentDetailsFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentDetailsFormComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(AgentDetailsFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
