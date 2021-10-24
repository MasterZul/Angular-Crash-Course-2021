import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable} from "rxjs";
import {Task} from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURl = 'http://localhost:5000/tasks';


  constructor(private http: HttpClient) { }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURl);
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiURl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskRemainder(task: Task): Observable<Task>{
    const url = `${this.apiURl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiURl, task, httpOptions);
  }
}
