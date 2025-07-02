import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-viewer',
  template: `
    <div class="page-viewer">
      <div class="page-container">
        <img
          [src]="currentPageUrl" 
          [alt]="'Page ' + currentPage"
          class="page-image"
          (load)="onImageLoad()"
          (error)="onImageError()"
        />
        <div class="page-info">
          Page {{ currentPage }} of {{ totalPages }}
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-viewer {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }
    
    .page-container {
      max-width: 100%;
      max-height: 80vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    
    .page-image {
      max-width: 100%;
      max-height: 90vh;
      overflow: scroll;
      object-fit: contain;
      border: 2px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    
    .page-info {
      font-size: 14px;
      color: #666;
      text-align: center;
      padding: 5px 10px;
      background: #f5f5f5;
      border-radius: 4px;
    }
  `]
})
export class PageViewerComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Input() currentPageUrl: string = '';

  onImageLoad() {
    console.log('Image loaded successfully');
  }

  onImageError() {
    console.error('Failed to load image');
  }
} 