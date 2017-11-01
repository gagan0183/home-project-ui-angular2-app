import { Routes } from '@angular/router';

import { BookStartComponent } from './book-start.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';

export const BOOK_ROUTES: Routes = [
  { path: '', component: BookStartComponent},
  { path: 'new', component: BookEditComponent},
  { path: ':id', component: BookDetailComponent},
  { path: ':id/edit', component: BookEditComponent}
];
