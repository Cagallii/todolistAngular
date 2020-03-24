import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import User from "../models/user";
import Login from "../models/Login";
import { UserServices } from "../services/userservices";
import { LoginServices } from "../services/LoginServices";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [UserServices, LoginServices]
})

export class LoginComponent implements OnInit {
  public user: User = new User();
  public loginUser: Login = new Login();
  @Output() onLoginSucceed = new EventEmitter<any>();

  constructor(
    private userservices: UserServices,
    private loginservices : LoginServices) { }

  ngOnInit() {
  }

  public createCount(){
    this.userservices.createCount(this.user).subscribe(data => {
      console.log("compte créé !");
    });
  }

  public login(){
    this.loginservices.login(this.user).subscribe(data => {
      console.log("je suis connecté !");
      this.onLoginSucceed.emit(data.accessToken);
    })

  }
}
