import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Token } from '@angular/compiler';

@Injectable({
   providedIn: 'root'
})
export class AuthService {

   isUserLoggedIn: boolean = false;
   username: any;
   login(username: string, password: string, data:any): Observable<any> {
      const headers = { 'content-type': 'application/json'}
      const body=JSON.stringify(data);  
      this.username = username;
      return this.httpClient.post('http://localhost:8080/' + 'login', body,{'headers':headers});
    }
    
   logout(): void {
      this.isUserLoggedIn = false;
      localStorage.removeItem('isUserLoggedIn');
      localStorage.removeItem('token');
   }

   constructor(private httpClient: HttpClient) { }
}

