import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input type="file" (change)="onFileSelected($event)" />
  `
})
export class FileUploadComponent {
  @Output() fileParsed = new EventEmitter<string>();

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.fileParsed.emit(reader.result as string);
      };
      reader.readAsText(file);
    }
  }
}

