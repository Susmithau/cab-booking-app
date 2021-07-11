import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/user/customer';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  addCustomerData =  {
    customerId : 0,
    userId:{
      userId:0,
      username:'',
      password:'',
      role:"customer"
    },
    customerUserName: '',
    customerPassword: '',
    customerAddress: '',
    customerMobileNumber: 0,
    customerEmail: ''
}
  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  
  registerCustomer(){
    console.log(this.addCustomerData);
    this.loginService.registerCustomer(this.addCustomerData).subscribe((response) => {
      console.log(response);
      this.addCustomerData=response;
      this.router.navigate(['authenticate']);
    },
    (error) => {
      console.log(error);
    })

  }

}
