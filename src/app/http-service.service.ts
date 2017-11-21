import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/rx';

import { LoaderService } from './loader/loader.service';
import { Book } from './books/book';

@Injectable()
export class HttpService {

  constructor(private http: Http, private loaderService: LoaderService) { }

  post(url: string, headers: Headers, object: any) {
      headers.append('Content-Type', 'application/json');
      this.showLoader();
      headers.append('Access-Control-Allow-Origin', 'http://122.173.192.14:8080/book');
      return this.http.post(url, object, {
        headers: headers
      })
      .map((data) => data.json())
      .catch(this.handleError)
      .finally(() => {
        this.hideLoader();
      });
  }

  get(url: string, headers: Headers) {
      headers.append('Content-Type', 'application/json');
      this.showLoader();
      headers.append('Access-Control-Allow-Origin', 'http://122.173.192.14:8080/book');
      return this.http.get(url, {
        headers: headers
      })
      .map((data) => data.json())
      .catch(this.handleError)
      .finally(() => {
        this.hideLoader();
      });
  }

  private handleError(error: any) {
    return Observable.throw(error);
  }

  private showLoader(): void {
    this.loaderService.show();
  }

  private hideLoader(): void {
    this.loaderService.hide();
  }
}
