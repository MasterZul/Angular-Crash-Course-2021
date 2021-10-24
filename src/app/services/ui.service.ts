import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddtask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    this.showAddtask = !this.showAddtask
    this.subject.next(this.showAddtask);
    console.log("obervableee");
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable()
  }
}
