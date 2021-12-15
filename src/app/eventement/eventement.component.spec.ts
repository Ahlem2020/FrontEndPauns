import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventementComponent } from './eventement.component';

describe('EventementComponent', () => {
  let component: EventementComponent;
  let fixture: ComponentFixture<EventementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
