import { Component, OnInit } from '@angular/core';

import { Book } from '../book';
import { BookService } from '../book.service';

import { NotificationsService } from '../../notifications.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService, private notificationService: NotificationsService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
        (data: Book[]) => {
          this.books = data;
        },
        (error) => {
          this.notificationService.error("Book", "There has been an error fetching the data");
        }
      );
    console.log(this.books);
  }
}
