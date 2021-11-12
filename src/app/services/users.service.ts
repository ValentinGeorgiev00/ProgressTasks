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
  addUser(user: User): Observable<User[]>{
       const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
        return this.http.post<User[]>(`${ environment.apiURL }users`, user, httpOptions);
  }
  updateUser(id: number, user: User): Observable<User[]>{
       const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
        return this.http.patch<User[]>(`${ environment.apiURL }users/${id}`, user, httpOptions);
  }

//       getIntegrations$(): Observable<Workflow[]> {
//             return this.http
//               .get<Workflow[]>(${environment.apiUrl}integrations);
// }
// getFlow(id: string): Observable<Flow[]> {
//       return this.http.get<Flow[]>(${environment.apiUrl}flows/${id})
// }
}