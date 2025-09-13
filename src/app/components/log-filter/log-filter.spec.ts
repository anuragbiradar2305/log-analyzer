import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogFilter } from './log-filter';

describe('LogFilter', () => {
  let component: LogFilter;
  let fixture: ComponentFixture<LogFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
