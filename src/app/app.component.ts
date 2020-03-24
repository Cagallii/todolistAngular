import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gérer vos todo-listes !';
  loginInfo = null;

  handleLoginSucceed(loginInfo: any) {
    this.loginInfo = loginInfo;
  }
}
