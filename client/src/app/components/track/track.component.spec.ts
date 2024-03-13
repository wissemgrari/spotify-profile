import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTrackComponent } from './top-track.component';

describe('TopTrackComponent', () => {
  let component: TopTrackComponent;
  let fixture: ComponentFixture<TopTrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopTrackComponent]
    });
    fixture = TestBed.createComponent(TopTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
