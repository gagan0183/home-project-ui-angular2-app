import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books/books.component';

import { BOOK_ROUTES } from './books/book.routing';

const APP_ROUTES_PROVIDERS: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full'},
  { path: 'books', component: BooksComponent, children: BOOK_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDERS);
