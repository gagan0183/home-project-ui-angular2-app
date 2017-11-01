import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/rx';

import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  selectedBook: Book;
  private bookIndex: number = 1;
  private subscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.bookIndex = params['id'];
        this.selectedBook = this.bookService.getBook(this.bookIndex);
      }
    );
  }

  onEdit() {
    this.router.navigate(['/books', this.bookIndex, 'edit']);
  }

  onDelete() {
    this.bookService.deleteBook(this.selectedBook);
    this.router.navigate(['/books']);
  }
}
