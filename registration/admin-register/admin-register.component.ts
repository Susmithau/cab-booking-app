import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/user/admin';
import { UserService } from 'src/app/user/user.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  
  addAdminData: Admin = {
    adminId: 0,
    userId:{
      userId: 0,
      username:'',
      password:'',
      role:"admin"
    },
    adminUserName: '',
    adminPassword: '',
    adminAddress: '',
    adminMobileNumber: 0,
    adminEmail:'',
  }
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  
  registerAdmin(myForm: NgForm){
    console.log(this.addAdminData);
    this.loginService.registerAdmin(this.addAdminData).subscribe((response) => {
      console.log(response);
      this.router.navigate(['authenticate']);
    },
    (error) => {
      console.log(error);
    })

}
}
