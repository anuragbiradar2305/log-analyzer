import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogEntry } from '../../models/log-entry.model';
import { LogFilterPipe } from '../../pipes/log-filter.pipe';

@Component({
  selector: 'app-log-viewer',
  standalone: true,
  imports: [CommonModule, FormsModule, LogFilterPipe],
  templateUrl: './log-viewer.html',
  styleUrls: ['./log-viewer.scss'],
})
export class LogViewerComponent {
  @Input() logs: LogEntry[] = [];

  selectedLevel: string = 'ALL';
  searchText: string = '';
}
