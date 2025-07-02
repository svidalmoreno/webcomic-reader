import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-navigation',
  template: `
    <div class="navigation-container">
      <div class="nav-buttons">
        <button 
          class="nav-btn first-btn"
          (click)="onFirstPage()"
          [disabled]="currentPage === 1"
          title="Go to first page"
        >
          <span class="btn-icon">⏮</span>
          <span class="btn-text">First</span>
        </button>
        
        <button 
          class="nav-btn prev-btn"
          (click)="onPreviousPage()"
          [disabled]="currentPage === 1"
          title="Go to previous page"
        >
          <span class="btn-icon">⏪</span>
          <span class="btn-text">Previous</span>
        </button>
        
        <div class="page-input-container">
          <input 
            type="number" 
            class="page-input"
            [value]="currentPage"
            (change)="onPageInput($event)"
            [min]="1"
            [max]="totalPages"
            title="Enter page number"
          />
          <span class="page-separator">of</span>
          <span class="total-pages">{{ totalPages }}</span>
        </div>
        
        <button 
          class="nav-btn next-btn"
          (click)="onNextPage()"
          [disabled]="currentPage === totalPages"
          title="Go to next page"
        >
          <span class="btn-text">Next</span>
          <span class="btn-icon">⏩</span>
        </button>
        
        <button 
          class="nav-btn last-btn"
          (click)="onLastPage()"
          [disabled]="currentPage === totalPages"
          title="Go to last page"
        >
          <span class="btn-text">Last</span>
          <span class="btn-icon">⏭</span>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .navigation-container {
      display: flex;
      justify-content: center;
      padding: 20px;
      background: #f8f9fa;
      border-top: 1px solid #e9ecef;
    }
    
    .nav-buttons {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    
    .nav-btn {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 6px;
      background: white;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 14px;
      min-width: 70px;
      justify-content: center;
    }
    
    .nav-btn:hover:not(:disabled) {
      background: #e9ecef;
      border-color: #adb5bd;
    }
    
    .nav-btn:active:not(:disabled) {
      background: #dee2e6;
      transform: translateY(1px);
    }
    
    .nav-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background: #f8f9fa;
    }
    
    .btn-icon {
      font-size: 16px;
    }
    
    .btn-text {
      font-weight: 500;
    }
    
    .page-input-container {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 0 12px;
      padding: 8px 12px;
      background: white;
      border: 1px solid #ddd;
      border-radius: 6px;
    }
    
    .page-input {
      width: 60px;
      border: none;
      text-align: center;
      font-size: 14px;
      outline: none;
    }
    
    .page-separator {
      color: #6c757d;
      font-size: 14px;
    }
    
    .total-pages {
      font-weight: 500;
      color: #495057;
      font-size: 14px;
    }
    
    @media (max-width: 480px) {
      .nav-buttons {
        flex-direction: column;
        gap: 12px;
      }
      
      .nav-btn {
        min-width: 100px;
      }
    }
  `]
})
export class PageNavigationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;

  @Output() pageChange = new EventEmitter<number>();

  onFirstPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(1);
    }
  }

  onPreviousPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  onNextPage() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  onLastPage() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.totalPages);
    }
  }

  onPageInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const pageNumber = parseInt(target.value, 10);
    
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.pageChange.emit(pageNumber);
    } else {
      // Reset to current page if invalid
      target.value = this.currentPage.toString();
    }
  }
} 