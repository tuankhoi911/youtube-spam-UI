import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "@env/environment";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BaseService {
  token: string;

  constructor(private http: HttpClient) {}

  getToken() {
    return this.token;
  }

  callAPIs(body, option?) {
    let req;
    if (this.token) {
      req = { ...body, token: this.token };
    } else {
      req = { ...body };
    }
    return this.http.post(environment.api, req, option).pipe(
      map((res) => res),
      catchError(this.handleError)
    );
  }

  protected handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  getApi(url) {
    return this.http.get(url);
  }
}
