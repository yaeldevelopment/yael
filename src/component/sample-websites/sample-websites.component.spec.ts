import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleWebsitesComponent } from './sample-websites.component';

describe('SampleWebsitesComponent', () => {
  let component: SampleWebsitesComponent;
  let fixture: ComponentFixture<SampleWebsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleWebsitesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
