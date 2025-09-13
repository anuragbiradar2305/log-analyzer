import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogStats } from './log-stats';

describe('LogStats', () => {
  let component: LogStats;
  let fixture: ComponentFixture<LogStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogStats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
