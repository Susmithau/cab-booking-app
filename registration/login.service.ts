import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../user/admin';
import { Customer } from '../user/customer';
import { Driver } from '../user/driver';
import { User } from '../user/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,private authService:AuthService) { }

  getHttpOptions() {
    let httpOptions = {};
    let userData: any = '';
    userData = this.authService.retrieveUserDetails();
    if (userData != null) {
      let token = JSON.parse(userData).token;
      console.log("token:" + token);
      httpOptions = {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + token
        })
      }
    }
    return httpOptions;
  }

  register(userData: User): Observable<User>{
    return this.http.post<User>("http://localhost:8040/register", userData);
  }

  login(userData: User): Observable<User>{
    return this.http.post<User>("http://localhost:8040/authenticate", userData);
  }

  registerCustomer(customerData: Customer): Observable<Customer>{
    return this.http.post<Customer>("http://localhost:8040/api/customer/add", customerData,this.getHttpOptions());
  }

  registerAdmin(adminData: Admin): Observable<Admin>{
    return this.http.post<Admin>("http://localhost:8040/api/admin/add", adminData,this.getHttpOptions());
  }

  registerDriver(driverData: Driver): Observable<Driver>{
    return this.http.post<Driver>("http://localhost:8040/api/driver/add", driverData,this.getHttpOptions());
  }


}
