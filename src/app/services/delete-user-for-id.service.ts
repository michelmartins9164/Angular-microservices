import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DeleteteUserForIdService {

  constructor(private http: HttpClient) { }

  delete(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/user/${id}`);
  }
}
