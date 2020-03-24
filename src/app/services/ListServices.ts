import List from "../models/List";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ListServices {
  constructor(protected http: HttpClient) {}

  public getList(tokenUser : string): Observable<List> {
    const headers: HttpHeaders = new HttpHeaders({
   tokenUser: tokenUser
    });

    const httpOptions = {
      headers: headers
    };

    return this.http
      .get<List>("https://todolist-yuzu.herokuapp.com/api/list", httpOptions);
  }

  public addList(data: List, tokenUser): Observable<List> {
      const headers: HttpHeaders = new HttpHeaders({
        tokenUser: tokenUser       
      });
  
      const httpOptions = {
        headers: headers
      };
      return this.http.post<List>("https://todolist-yuzu.herokuapp.com/api/list", data ,httpOptions);
  }
}
