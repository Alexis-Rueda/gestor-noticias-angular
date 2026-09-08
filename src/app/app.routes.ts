import { Routes } from '@angular/router';
import { NoticiaPage } from './noticias/pages/noticia/noticia-page';

export const routes: Routes = [
  {
    path: '',
    component: NoticiaPage
  },
  {
    path: '**',
    redirectTo: ''
  }
];
