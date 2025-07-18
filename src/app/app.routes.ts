import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./comic-reader/comic-reader.component').then(
        (m) => m.ComicReaderComponent
      ),
  },
];
