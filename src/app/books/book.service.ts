import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { Book } from './book';
import { bookConfig } from '../../assets/config/app.config';
import { HttpService } from '../http-service.service';
import { NotificationsService } from '../notifications.service';

@Injectable()
export class BookService {
  books: Book[] = [];

  constructor(private httpService: HttpService, private notificationService: NotificationsService) { }

  getBooks() {
    return this.books;
  }

  getBook(id: number) {
    return this.books[id];
  }

  deleteBook(book: Book) {
    this.books.splice(this.books.indexOf(book), 1);
  }

  addBook(book: Book): string {
    let object = book;
    const headers = new Headers();
    let url = bookConfig.post;
    let response: string;
    this.httpService.post(url, headers, object).subscribe(
        (data) => {
          this.notificationService.success("Book", "Book has been successfully added");
          response = 'success';
        },
        (error) => {
          this.notificationService.error("Book", "There has been an error connecting API");
          response = 'error';
        }
      );
    return response;
  }

  editBook(oldBook: Book, newBook: Book) {
    this.books[this.books.indexOf(oldBook)] = newBook;
  }
}
