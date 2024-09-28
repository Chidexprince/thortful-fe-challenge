import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl + '/?results=10&exc=login';

  constructor(private http: HttpClient) { }

  public getUsers(gender?: string): Observable<User[]> {
    return this.http.get<any>(`${this.apiUrl}&gender=${gender}`).pipe(
      map(response => response.results),
      catchError(this.errorHandler)
    );
  }

  // Error Handler
  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
