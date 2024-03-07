import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseUrl='https://localhost:7196/api/User'
  constructor(private http: HttpClient) { }
  getUserByName(name: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${name}`)
  }
}
