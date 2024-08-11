import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RequireAgentComponent } from './require-agent.component'

describe('RequireAgentComponent', () => {
  let component: RequireAgentComponent
  let fixture: ComponentFixture<RequireAgentComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequireAgentComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(RequireAgentComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
