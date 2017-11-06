import { Injectable } from '@angular/core';

import { Book } from './book';

@Injectable()
export class BookService {
  books: Book[] = [
    new Book('999-999-999', 'The midnight gang', 'children', 'david williams', '2017-11-06', '2017-11-06', false, 'https://dti2b9sshqmb0.cloudfront.net/shop-assets/products/558158/large/558158v2.jpg?1476396636'),
    new Book('999-999-999', 'The gangsta nanny', 'children', 'david willams', '2017-11-06', '2017-11-06', false, 'https://www.worldofdavidwalliams.com/wp-content/uploads/2015/07/thumb-GG.jpg'),
    new Book('999-999-999', 'Awful antie', 'children', 'david williams', '2017-11-06', '2017-11-06', false, 'https://upload.wikimedia.org/wikipedia/en/1/11/Awful_Auntie_Cover.jpg')
  ];

  constructor() { }

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
    this.books.push(book);
  }

  editBook(oldBook: Book, newBook: Book) {
    this.books[this.books.indexOf(oldBook)] = newBook;
  }
}
