import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionFromComponent } from './subscription-from.component';

describe('SubscriptionFromComponent', () => {
  let component: SubscriptionFromComponent;
  let fixture: ComponentFixture<SubscriptionFromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionFromComponent]
    });
    fixture = TestBed.createComponent(SubscriptionFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
