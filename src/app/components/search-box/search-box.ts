import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './search-box.html',
  styleUrls: ['./search-box.scss']
})
export class SearchBoxComponent {
  query = '';
  search$ = new BehaviorSubject<string>('');

  onSearchChange() {
    this.search$.next(this.query.toLowerCase());
  }
}
