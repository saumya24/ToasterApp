import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { IToast, IToastType } from 'src/app/models/toast.interface';

@Injectable({
  providedIn: 'root'
})

export class ToastService {
  private subject = new Subject<IToast>();
  private keepAfterRouteChange = false;
  private type: string;
  constructor(private router: Router) {
   router.events.subscribe(event => {
    if (event instanceof NavigationStart) {
     if (this.keepAfterRouteChange) {
      this.keepAfterRouteChange = false;
     } else {
      this.clear();
     }
    }
   });
  }
 getToast(): Observable<any> {
  return this.subject.asObservable();
 }
 success(type, message, keepAfterRouteChange = true): void {
  this.toast(type, message, keepAfterRouteChange);
 }
 error(type, message, keepAfterRouteChange = true): void {
  this.toast(type, message, keepAfterRouteChange);
 }
 info( type , message: string, keepAfterRouteChange = true): void {
  this.toast(type, message, keepAfterRouteChange);
 }
 warn(type , message: string, keepAfterRouteChange = true): void {
  this.toast(type , message, keepAfterRouteChange);
 }
 toast(type: IToastType , message: string, keepAfterRouteChange = true): void {
  this.keepAfterRouteChange = keepAfterRouteChange;
  this.subject.next(<IToast>{ type: type, message: message });
 }
 clear() {
  this.subject.next();
 }
}
