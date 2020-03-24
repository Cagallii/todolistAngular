import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import User from "../models/user"

@Injectable({
  providedIn: "root"
})
export class UserServices {
  constructor(protected http: HttpClient) {}

  public createCount(data: User): Observable<User> {
    return this.http.post<User>("https://todolist-yuzu.herokuapp.com/api/users", data);
  }
}
