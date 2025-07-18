import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTitleComponent } from '../header-title/header-title.component';
import { FooterNavigationComponent } from '../footer-navigation/footer-navigation.component';

@Component({
  selector: 'app-comic-reader',
  standalone: true,
  imports: [CommonModule, HeaderTitleComponent, FooterNavigationComponent],
  templateUrl: './comic-reader.component.html',
  styleUrl: './comic-reader.component.scss'
})
export class ComicReaderComponent {
  // List of page image URLs. Replace with your comic pages as needed.
  pages: string[] = [
    'https://picsum.photos/id/1016/800/1200',
    'https://picsum.photos/id/1015/800/1200',
    'https://picsum.photos/id/1018/800/1200',
    'https://picsum.photos/id/1020/800/1200'
  ];

  currentIndex = 0;

  get isFirst(): boolean {
    return this.currentIndex === 0;
  }

  get isLast(): boolean {
    return this.currentIndex === this.pages.length - 1;
  }

  first(): void {
    if (!this.isFirst) {
      this.currentIndex = 0;
    }
  }

  previous(): void {
    if (!this.isFirst) {
      this.currentIndex -= 1;
    }
  }

  next(): void {
    if (!this.isLast) {
      this.currentIndex += 1;
    }
  }

  last(): void {
    if (!this.isLast) {
      this.currentIndex = this.pages.length - 1;
    }
  }
} 