import { Component } from '@angular/core';
import { PageViewerComponent } from './page-viewer.component';
import { PageNavigationComponent } from './page-navigation.component';

@Component({
  selector: 'app-root',
  imports: [PageViewerComponent, PageNavigationComponent],
  template: `
    <div class="webcomic-reader">
      <header class="header">
        <h1>Webcomic Reader</h1>
      </header>
      
      <main class="main-content">
        <app-page-viewer
          [currentPage]="currentPage"
          [totalPages]="totalPages"
          [currentPageUrl]="getCurrentPageUrl()"
        ></app-page-viewer>
        
        <app-page-navigation
          [currentPage]="currentPage"
          [totalPages]="totalPages"
          (pageChange)="onPageChange($event)"
        ></app-page-navigation>
      </main>
    </div>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'webcomic-reader';
  
  currentPage = 1;
  totalPages = 5;
  
  // Sample webcomic pages - in a real app, these would come from a service
  private pageUrls: string[] = [
    'https://img.comicfury.com/comics/390/73655a1748307776b127246f475152545.jpg',
    'https://via.placeholder.com/600x800/50c878/ffffff?text=Page+2',
    'https://via.placeholder.com/600x800/ff6b6b/ffffff?text=Page+3',
    'https://via.placeholder.com/600x800/ffa500/ffffff?text=Page+4',
    'https://via.placeholder.com/600x800/9b59b6/ffffff?text=Page+5'
  ];

  getCurrentPageUrl(): string {
    return this.pageUrls[this.currentPage - 1] || '';
  }

  onPageChange(newPage: number): void {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
      console.log(`Navigate to page ${newPage}`);
    }
  }
}
