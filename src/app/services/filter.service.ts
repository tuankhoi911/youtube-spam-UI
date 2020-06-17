import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class FilterService {
  constructor(private apiService: BaseService) {}

  public checkSpam(commentObj): Observable<any> {
    return this.apiService
      .callAPIs(commentObj, commentObj.typeAlgorism)
      .pipe(map((res: any) => res));
  }
}
