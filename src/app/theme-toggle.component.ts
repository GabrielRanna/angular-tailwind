import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button (click)="toggleTheme()" class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
      {{ themeService.isDarkMode() ? '🌙' : '☀️' }}
    </button>
  `
})
export class ThemeToggleComponent {
  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}