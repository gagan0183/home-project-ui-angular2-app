import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Book } from './book';
import { bookConfig } from '../../assets/config/app.config';

@Injectable()
export class BookService {
  books: Book[] = [];

  constructor(private http: Http) { }

  getBooks() {
    return this.books;
  }

  getBook(id: number) {
    return this.books[id];
  }

  deleteBook(book: Book) {
    this.books.splice(this.books.indexOf(book), 1);
  }

  addBook(book: Book) {
    let body = book;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://192.168.1.2:8080/book');
    headers.append('Access-Control-Request-Method', 'POST');
    headers.append('Access-Control-Allow-Headers', 'origin, content-type, request-method');
    return this.http.post(bookConfig.post, body, {
      headers: headers
    });
  }

  editBook(oldBook: Book, newBook: Book) {
    this.books[this.books.indexOf(oldBook)] = newBook;
  }
}
