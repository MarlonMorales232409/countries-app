import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _url: string = 'https://restcountries.com/v3.1/'

  searchCountry(query: string): Observable<any>{
    const nameUrl = `${this._url}/name/${query}`
    return this.http.get(nameUrl)
  }

  constructor(private http: HttpClient) { }
}
