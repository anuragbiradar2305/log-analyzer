import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-log-filter',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './log-filter.html',
  styleUrls: ['./log-filter.scss']
})
export class LogFilterComponent {
  levels = ['ALL', 'INFO', 'WARN', 'ERROR', 'DEBUG'];
  selectedLevel = 'ALL';
  filter$ = new BehaviorSubject<string>('ALL');

  onFilterChange(level: string) {
    this.filter$.next(level);
  }
}
