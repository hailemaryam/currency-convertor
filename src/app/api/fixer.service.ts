import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
const convert = require('./Mock/convert.json');
const latest = require('./Mock/latest.json');
const historic = require('./Mock/historic.json');

@Injectable({
  providedIn: 'root'
})
export class FixerService {

  constructor(private http: HttpClient) { }

  convert(from: any, to: any, amount: any): Observable<any>{
    const url = 'https://api.apilayer.com/fixer/convert?from=' + from + '&to=' + to + '&amount=' + amount;
    // return this.http.get<any>(url);
    return of(convert)
  }

  latest(base: any): Observable<any>{
    const url = 'https://api.apilayer.com/fixer/latest?base=' + base;
    // return this.http.get<any>(url);
    return of(latest)
  }

  historic(base: any, date:any): Observable<any>{
    const url = 'https://api.apilayer.com/fixer/' + date + '?base=' + base;
    // return this.http.get<any>(url);
    return of(historic);
  }
}
