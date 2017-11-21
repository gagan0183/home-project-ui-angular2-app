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
    const headers = new Headers();
    let url = bookConfig.getAllBooks;
    return this.httpService.get(url, headers);
  }

  getBook(id: number) {
    return this.books[id];
  }

  deleteBook(book: Book) {
    this.books.splice(this.books.indexOf(book), 1);
  }

  addBook(book: Book) {
    let object = book;
    const headers = new Headers();
    let url = bookConfig.post;
    return this.httpService.post(url, headers, object);
  }

  editBook(oldBook: Book, newBook: Book) {
    this.books[this.books.indexOf(oldBook)] = newBook;
  }
}
