import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MySeviceService {

  baseUrl ="http://localhost:3000/"
  isLogin = false
  userType = 'user'
  constructor(private http : HttpClient) { }

  login(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}customer_login` , obj )
  }

  users():Observable<any>{
    
    return this.http.get('http://localhost:3000/users')
  }
}
