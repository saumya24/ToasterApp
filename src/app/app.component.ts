import { Component } from '@angular/core';
import { ToastService } from './services/toaster/toaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToasterApp';

  constructor(private toastService: ToastService) { }

  success() {
    this.toastService.success('Success', 'Operation Done Sucessfully!');
   }
   error() {
    this.toastService.error('Error', 'Oops, something went wrong. Please try again');
   }
   info() {
    this.toastService.info('Info', 'Here is some more info which might be useful');
   }
   warn() {
    this.toastService.warn('Warn', 'This is a warning for your process');
   }
   clear() {
    this.toastService.clear();
   }
}
