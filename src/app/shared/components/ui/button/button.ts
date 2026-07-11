import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class ButtonComponent {
  label = input.required<string>();
  icon = input<string>();
  disabled = input(false);
  loading = input(false);
  type = input<'button' | 'submit'>('button');
  variant = input<'flat' | 'stroked' | 'text'>('flat');
  color = input<'primary' | 'accent' | 'warn'>('primary');
  clicked = output<void>();

  handleClick(): void {
    if (!this.loading() && !this.disabled()) {
      this.clicked.emit();
    }
  }
}
