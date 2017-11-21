import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/rx';

import { BookService } from '../book.service';
import { Book } from '../book';

import { NotificationsService } from '../../notifications.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup;
  private subscription: Subscription;
  private bookIndex: number;
  private book: Book;
  private isNew: boolean = true;

  constructor(private route: ActivatedRoute, private bookService: BookService,
              private formBuilder: FormBuilder, private router: Router, private notificationService: NotificationsService) {
  }

  ngOnInit() {
    this.isNew = true;
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('id')) {
          this.isNew = false;
          this.bookIndex = +params['id'];
          this.book = this.bookService.getBook(this.bookIndex);
        }
        else {
          this.isNew = true;
        }
        this.initForm();
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initForm() {
    let isbn = '';
    let bookName = '';
    let type = '';
    let author = '';
    let startDate = '';
    let completeDate = '';
    let revision = false;
     if(!this.isNew) {
      isbn = this.book.isbn;
      bookName = this.book.bookName;
      type = this.book.type;
      author = this.book.author;
      startDate = this.book.startDate;
      completeDate = this.book.completeDate;
      revision = this.book.revision;
    }
    this.bookForm = this.formBuilder.group({
      isbn: [isbn, Validators.required],
      bookName: [bookName, Validators.required],
      type: [type, Validators.required],
      author: [author, Validators.required],
      startDate: [startDate, Validators.required],
      completeDate: [completeDate, Validators.required],
      revision: [revision]
    })
  }

  onSubmit() {
    console.log(this.bookForm);
    const newBook = this.bookForm.value;
    if(this.isNew) {
      this.bookService.addBook(newBook).subscribe(
        (data) => {
          this.notificationService.success("Book", "Book has been successfully added");
        },
        (error) => {
          this.notificationService.error("Book", "There has been an error connecting API");
        }
      );
    }
    else {
      this.bookService.editBook(this.book, newBook);
    }
  }

  onCancel() {
    this.navigate();
  }

  navigate() {
    this.router.navigate(['../']);
  }
}


