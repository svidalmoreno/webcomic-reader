import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header-title">
      <h1>{{ title }}</h1>
    </header>
  `,
  styles: [
    `
      .header-title {
        width: 100%;
        padding: 1rem;
        text-align: center;
        background-color: #222;
        color: #fff;
      }

      h1 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 600;
      }
    `,
  ],
})
export class HeaderTitleComponent {
  @Input() title = 'Webcomic Reader';
} 