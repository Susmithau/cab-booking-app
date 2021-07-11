import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-driver-register',
  templateUrl: './driver-register.component.html',
  styleUrls: ['./driver-register.component.css']
})
export class DriverRegisterComponent implements OnInit {
  addDriverData =  {
    driverId: 0,
    userId:{
      userId : 0,
      username:'',
      password:'',
      role:"driver"
    },
    cab:{
      cabId:0,
      carType:'',
      perKmRate:0
    },
    driverUserName: '',
    driverPassword: '',
    driverAddress: '',
    driverMobileNumber: 0,
    driverEmail: '',
    driverLicenceNumber:0,
    driverRating:0
}
  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  
  registerDriver(){
    console.log(this.addDriverData);
    this.loginService.registerDriver(this.addDriverData).subscribe((response) => {
      console.log(response);
      this.router.navigate(['authenticate']);
    },
    (error) => {
      console.log(error);
    })

  }
}
