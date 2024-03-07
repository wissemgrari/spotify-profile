import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTrackComponent } from './recent-track.component';

describe('RecentTrackComponent', () => {
  let component: RecentTrackComponent;
  let fixture: ComponentFixture<RecentTrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentTrackComponent]
    });
    fixture = TestBed.createComponent(RecentTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
