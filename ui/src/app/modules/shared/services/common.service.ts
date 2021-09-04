import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private showSideNavSubject = new BehaviorSubject<boolean>(true);
  public showSideNav$ = this.showSideNavSubject.asObservable();

  public setShowSideNav(data: boolean){
    this.showSideNavSubject.next(data);
  }

  yearsLtCurrentYear(count: number): string[] {
    let currentYear = new Date().getFullYear();

    const years: string[] = [];

    for (let i = 0; i < count; i++) {
      if (i !== 0) {
        currentYear -= 1;
      }
      years.push(currentYear + '');
    }

    return years;
  }

  constructor() { }

}
