import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FixerService {

  constructor(private http: HttpClient) { }

  convert(from: any, to: any, amount: any): Observable<any>{
    const url = 'https://api.apilayer.com/fixer/convert?from=' + from + '&to=' + to + '&amount=' + amount;
    return this.http.get<any>(url);
  }
}