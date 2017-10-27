import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[]= [];
  @Output() bookSelected = new EventEmitter();
  book: Book = new Book('isbn', 'book name', 'type', 'author', new Date(), new Date(), false, 'http://img.com');

  constructor() { }

  ngOnInit() {
  }

  onSelected(book: Book) {
   this.bookSelected.emit(book);
  }
}
