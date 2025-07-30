import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyPrivacyComponent } from './policy-privacy.component';

describe('PolicyPrivacyComponent', () => {
  let component: PolicyPrivacyComponent;
  let fixture: ComponentFixture<PolicyPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyPrivacyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
