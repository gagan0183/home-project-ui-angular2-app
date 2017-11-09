import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/rx';

import { LoaderService } from './loader/loader.service';

@Injectable()
export class HttpService {

  constructor(private http: Http, private loaderService: LoaderService) { }

  post(url: string, headers: Headers, object: any) {
      headers.append('Content-Type', 'application/json');
      this.showLoader();
      headers.append('Access-Control-Allow-Origin', 'http://192.168.1.2:8080/book');
      return this.http.post(url, object, {
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
