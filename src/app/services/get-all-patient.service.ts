import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class GetAllPatientService {

  constructor(private http: HttpClient) { }

  getAllPatients():Observable<User> {
    return this.http.get<User>("/api/user").pipe(take(1));
  }

}

