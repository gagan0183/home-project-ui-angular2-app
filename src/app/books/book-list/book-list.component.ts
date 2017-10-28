import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[]= [
    new Book('999-999-999', 'The midnight gang', 'children', 'david williams', new Date(), new Date(), false, 'https://dti2b9sshqmb0.cloudfront.net/shop-assets/products/558158/large/558158v2.jpg?1476396636'),
    new Book('999-999-999', 'The gangsta nanny', 'children', 'david willams', new Date(), new Date(), false, 'https://www.worldofdavidwalliams.com/wp-content/uploads/2015/07/thumb-GG.jpg'),
    new Book('999-999-999', 'Awful antie', 'children', 'david williams', new Date(), new Date(), false, 'https://upload.wikimedia.org/wikipedia/en/1/11/Awful_Auntie_Cover.jpg')
  ];
  @Output() bookSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelected(book: Book) {
   this.bookSelected.emit(book);
  }
}
