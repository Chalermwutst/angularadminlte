import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendlayoutComponent } from './frontendlayout.component';

describe('FrontendlayoutComponent', () => {
  let component: FrontendlayoutComponent;
  let fixture: ComponentFixture<FrontendlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
