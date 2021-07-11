import { Component, OnInit } from '@angular/core';
import { AuthService } from '../registration/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  uid='';


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  getRole() {
    return this.authService.getRole();
  }

  getUser() {
    return this.authService.retrieveUserDetails();
  }

  getUserId() {
    let user: any= '';
    user=this.getUser();
    console.log(JSON.parse(user).user.userId);
    this.uid= JSON.parse(user).user.userId;
    return this.uid;
  }


 
}
