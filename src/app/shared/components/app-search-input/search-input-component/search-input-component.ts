import { Component, input, output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-input-component',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './search-input-component.html',
  styleUrl: './search-input-component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SearchInputComponent {
  placeholder = input('Buscar');
  searchChange = output<string>();

  value = '';

  onInput(): void {
    this.searchChange.emit(this.value);
  }
}
