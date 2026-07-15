import { Component, computed, forwardRef, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SelectOption } from './models/select-option';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  // Inputs
  readonly required = input(false);
  readonly label = input('');
  readonly placeholder = input('Selecciona una opción');
  readonly options = input<SelectOption[]>([]);

  // Signals
  readonly value = signal<string | number | null>(null);
  readonly isOpen = signal(false);
  readonly disabled = signal(false);

  // Computed
  readonly selectedLabel = computed(() => {
    const option = this.options().find((option) => option.value === this.value());

    return option?.label ?? this.placeholder();
  });

  // ControlValueAccessor
  private onChange: (value: string | number | null) => void = () => undefined;
  private onTouched: () => void = () => undefined;

  writeValue(value: string | number | null): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: string | number | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  toggleDropdown(): void {
    if (this.disabled()) {
      return;
    }

    this.isOpen.update((value) => !value);
  }

  selectOption(option: SelectOption): void {
    this.value.set(option.value);
    this.onChange(option.value);
    this.onTouched();
    this.isOpen.set(false);
  }
}
