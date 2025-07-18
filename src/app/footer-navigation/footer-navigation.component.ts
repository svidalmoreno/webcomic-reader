import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer-nav">
      <button (click)="first()" [disabled]="isFirst">First</button>
      <button (click)="previous()" [disabled]="isFirst">Previous</button>

      <span class="page-indicator">{{ currentIndex + 1 }} / {{ totalPages }}</span>

      <button (click)="next()" [disabled]="isLast">Next</button>
      <button (click)="last()" [disabled]="isLast">Last</button>
    </footer>
  `,
  styles: [
    `
      .footer-nav {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 1rem;
        background-color: #f5f5f5;
      }

      .footer-nav button {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
        cursor: pointer;
      }

      .footer-nav button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .page-indicator {
        min-width: 4rem;
        text-align: center;
        font-weight: 500;
      }
    `,
  ],
})
export class FooterNavigationComponent {
  @Input() currentIndex = 0;
  @Input() totalPages = 0;
  @Input() isFirst = true;
  @Input() isLast = false;

  // Accept navigation handlers from parent
  @Input() first: () => void = () => {};
  @Input() previous: () => void = () => {};
  @Input() next: () => void = () => {};
  @Input() last: () => void = () => {};
} 