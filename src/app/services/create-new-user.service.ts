import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateNewUserService {
  @Output() teste = new EventEmitter();

  constructor(private http: HttpClient) { }

  createNewUser(data: User):Observable<User> {
    this.teste.emit();
    return this.http.post<User>("http://localhost:3000/user", data);
  }

}
