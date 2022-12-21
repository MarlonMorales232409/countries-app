import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _url: string = 'https://restcountries.com/v3.1/'

  searchCountry(query: string): Observable<Country[]>{
    const nameUrl = `${this._url}/name/${query}`
    return this.http.get<Country[]>(nameUrl)
  }

  constructor(private http: HttpClient) { }
}
