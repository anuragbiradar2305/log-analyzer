import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { LogEntry } from '../../models/log-entry.model';

@Component({
  selector: 'app-log-stats',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './log-stats.html',
  styleUrls: ['./log-stats.scss']
})
export class LogStatsComponent {
  @Input() logs: LogEntry[] = [];

  count(level: string) {
    return this.logs.filter(l => l.level === level).length;
  }
}
