import { ComponentFixture, TestBed } from '@angular/core/testing'

import { WishlistAgentComponent } from './wishlist-agent.component'

describe('WishlistAgentComponent', () => {
  let component: WishlistAgentComponent
  let fixture: ComponentFixture<WishlistAgentComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistAgentComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(WishlistAgentComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
