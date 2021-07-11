import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/user/customer';
import { User } from 'src/app/user/user';
import { UserService } from 'src/app/user/user.service';
import { AuthService } from '../auth.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   

  addUserData = {
    userId: 0,
    username: '',
    password: '',
    role:''
  }

  
  constructor(private loginService: LoginService,
    private router: Router,
    private authService: AuthService,private user: UserService) { }

ngOnInit(): void {
}

login(){
this.loginService.login(this.addUserData).subscribe((response) => {
console.log(response);
this.authService.storeUserDetails(JSON.stringify(response));
this.authService.setRole(this.addUserData.role);
if(this.addUserData.role == "customer") {

  this.router.navigate(['home']);  
}
else if(this.addUserData.role == "admin") {
  
  this.router.navigate(['home']);
}
else if(this.addUserData.role == "driver") {

  this.router.navigate(['home']);
}

},
(error) => {
console.log(error);
})
}

editCustomer(userId: number){
  console.log(userId);
  this.router.navigate(['edit-customer',userId]);
}

}
