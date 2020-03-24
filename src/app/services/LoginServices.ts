import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import User from "../models/user";
import Login from "../models/Login"

@Injectable({
  providedIn: "root"
})
export class LoginServices {
  constructor(protected http: HttpClient) {}

  public login(data: User): Observable<Login> {
    return this.http.post<Login>("https://todolist-yuzu.herokuapp.com/api/auth/login", data);
  }
}

