import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { LogEntry } from '../../models/log-entry.model';

@Component({
  selector: 'app-log-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './log-list.html',
  styleUrls: ['./log-list.scss']
})
export class LogListComponent {
  @Input() logs: LogEntry[] = [];

  displayedColumns: string[] = ['timestamp', 'level', 'message'];
}
