import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class ButtonComponent {
  readonly label = input.required<string>();
  readonly icon = input<string>();
  readonly disabled = input(false);
  readonly loading = input(false);
  readonly type = input<'button' | 'submit'>('button');
  readonly variant = input<'primary' | 'secondary' | 'ghost' | 'danger'>('primary');
  readonly clicked = output<void>();

  handleClick(): void {
    if (this.disabled() || this.loading()) {
      return;
    }
    this.clicked.emit();
  }
}
