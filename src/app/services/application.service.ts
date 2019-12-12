import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpClientModule, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApplicationService {

  constructor(
    private http:HttpClient
  ) { }

  public getFormList():Observable<any> {
    return this.http.get("assets/autoDocsList.json");
  }
}
