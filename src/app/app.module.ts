import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ToastyModule} from 'ng2-toasty';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookItemComponent } from './books/book-list/book-item.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { DropdownDirective } from './dropdown.directive';
import { BookService } from './books/book.service';
import { routing } from './app.routing';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BookStartComponent } from './books/book-start.component';
import { NotificationsService } from './notifications.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookListComponent,
    BookItemComponent,
    BookDetailComponent,
    DropdownDirective,
    BookEditComponent,
    BookStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ToastyModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [BookService, NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
