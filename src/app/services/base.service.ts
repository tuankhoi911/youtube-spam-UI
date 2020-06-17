import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@env/environment";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BaseService {
  token: string;

  constructor(private http: HttpClient) {}

  callAPIs(body, option = "all") {
    {
      let { comment } = body;
      return this.http.post(`${environment.api}/${option}`, {comment}).pipe(
        map((res) => res),
        catchError(this.handleError)
      );
    }
  }

  protected handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  getApi(url) {
    return this.http.get(url);
  }
}
