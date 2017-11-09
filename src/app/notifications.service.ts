import { Injectable } from '@angular/core';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

@Injectable()
export class NotificationsService {

  constructor(private toastyService:ToastyService, private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'material';
  }

  success(title: string, message: string) {
    this.toastyService.success({
      title: title,
      msg: message,
      showClose: true,
      timeout: 5000,
      theme: 'default'
    });
  }

  error(title: string, message: string) {
    this.toastyService.error({
      title: title,
      msg: message,
      showClose: true,
      timeout: 5000,
      theme: 'default'
    });
  }
}
