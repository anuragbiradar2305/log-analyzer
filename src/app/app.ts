import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { LogService } from './services/log.service';
import { LogEntry } from './models/log-entry.model';
import { FileUploadComponent } from './components/file-upload/file-upload';
import { LogViewerComponent } from './components/log-viewer/log-viewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FileUploadComponent, LogViewerComponent, AsyncPipe],
  template: `
    <app-file-upload (fileParsed)="onFileParsed($event)"></app-file-upload>
    <app-log-viewer [logs]="(logs$ | async) || []"></app-log-viewer>
  `,
})
export class AppComponent implements OnInit {
  logs$!: Observable<LogEntry[]>;

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.logs$ = this.logService.logs$;
  }

  onFileParsed(content: string) {
    this.logService.parseLogFile(content);
  }
}
