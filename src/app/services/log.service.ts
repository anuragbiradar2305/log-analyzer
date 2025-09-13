import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LogEntry } from '../models/log-entry.model';

@Injectable({ providedIn: 'root' })
export class LogService {
  private logsSubject = new BehaviorSubject<LogEntry[]>([]);
  logs$: Observable<LogEntry[]> = this.logsSubject.asObservable();

  parseLogFile(content: string): void {
    const lines = content.split('\n').filter(l => l.trim().length > 0);

    const parsedLogs: LogEntry[] = lines.map(line => {
      const match = line.match(/^(.*?) \[(.*?)\]\s+\((.*?)\)\s+-\s+(.*)$/);

      if (match) {
        return {
          timestamp: match[1],
          level: match[2] as LogEntry['level'],
          source: match[3],
          message: match[4],
        };
      }

      return {
        timestamp: '',
        level: 'INFO',
        source: 'Unknown',
        message: line,
      };
    });

    this.logsSubject.next(parsedLogs);
  }

  clearLogs(): void {
    this.logsSubject.next([]);
  }
}
