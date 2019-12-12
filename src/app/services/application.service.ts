import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApplicationService {
  linkObj = {};
  constructor(
    private http: HttpClient
  ) { }

  public getFormList():Observable<any> {
    return this.http.get("assets/autoDocsList.json");
  }
  public getDoc(inputReqObj: any): Observable<any> {
    return this.http.get("assets/docLink.json");
  }
  public getDocLink(): any {
    return this.linkObj;
  }

  public setDocLink(linkObj: any) {
    this.linkObj = linkObj;
  }
}
