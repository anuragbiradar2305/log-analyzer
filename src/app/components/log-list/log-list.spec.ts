import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogListComponent } from './log-list';

describe('LogList', () => {
  let component: LogListComponent;
  let fixture: ComponentFixture<LogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
