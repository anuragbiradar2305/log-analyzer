import { Pipe, PipeTransform } from '@angular/core';
import { LogEntry } from '../models/log-entry.model';

@Pipe({
  name: 'logFilter',
  standalone: true,
})
export class LogFilterPipe implements PipeTransform {
  transform(logs: LogEntry[], level: string, search: string): LogEntry[] {
    if (!logs) return [];

    let filtered = logs;

    // Filter by level
    if (level && level !== 'ALL') {
      filtered = filtered.filter(log => log.level === level);
    }

    // Filter by search keyword
    if (search && search.trim() !== '') {
      filtered = filtered.filter(log =>
        (log.message + log.source + log.level)
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    return filtered;
  }
}
