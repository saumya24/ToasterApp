import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../services/toaster/toaster.service';
import { IToast } from '../../../models/toast.interface';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  toasts: IToast[] = [];
  constructor(private toastService: ToastService) { }
  ngOnInit(): void {
   this.toastService.getToast().subscribe((toast: IToast) => {
    if (!toast) {
     this.toasts = [];
     return;
    }
    this.toasts = [];
    this.toasts.push(toast);
    console.log(toast);
    setTimeout(() => this.removeToast(toast), 3000);
   });
  }
  removeToast(toast: IToast): void {
   this.toasts = this.toasts.filter(x => x !== toast);
  }
}
