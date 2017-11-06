import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/rx';

import { BookService } from '../book.service';
import { Book } from '../book';

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
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('id')) {
          this.bookIndex = +params['id'];
          this.isNew = false;
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
    console.log(this.book.completeDate.getDate() + '-' + (this.book.completeDate.getMonth() + 1) + '-' + this.book.completeDate.getFullYear());
    let isbn = '';
    let name = '';
    let type = '';
    let author = '';
    let startDate = '';
    let completeDate = '';
    let revision = false;
    let imagePath = '';
    if(!this.isNew) {
      isbn = this.book.isbn;
      name = this.book.bookName;
      type = this.book.type;
      author = this.book.author;
      startDate = this.book.startDate.toISOString().substring(0,10);
      completeDate = this.book.completeDate.toISOString().substring(0,10);
      revision = this.book.revision;
      imagePath = this.book.imagePath;
    }
    this.bookForm = this.formBuilder.group({
      isbn: [isbn, Validators.required],
      name: [name, Validators.required],
      type: [type, Validators.required],
      author: [author, Validators.required],
      startDate: [startDate, Validators.required],
      completeDate: [completeDate, Validators.required],
      revision: [revision],
      imagePath: [imagePath, Validators.required]
    })
    console.log(this.bookForm);
  }
}
