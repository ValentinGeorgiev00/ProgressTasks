import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { User } from "../models/user.model";

@Injectable({
      providedIn: 'root',
    })
export class UsersService {
      constructor(private http: HttpClient) {}

    getUsers$(): Observable<User[]>{
        return this.http.get<User[]>(`${ environment.apiURL }users`);
  }
  addUser(user: User){
       const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
        return this.http.post<User[]>(`${ environment.apiURL }users`, user, httpOptions);
  }
  updateUser(id: number, user: User){
       const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
        return this.http.patch<User[]>(`${ environment.apiURL }users/${id}`, user, httpOptions);
  }
}

