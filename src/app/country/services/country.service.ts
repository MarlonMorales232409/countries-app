import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  // private _regionUrl : string = 'https://restcountries.com/v2/regionalbloc'
  private _url: string = 'https://restcountries.com/v3.1/'

  get httpParams(){
    // ?fields=name,flag,capital,population,cca2
    return new HttpParams().set('fields', 'name,flag,capital,population,cca2')
  }

  searchCountry(query: string): Observable<Country[]>{
    const nameUrl = `${this._url}/name/${query}`
    return this.http.get<Country[]>(nameUrl, { params: this.httpParams })
  }

  searchCapital(query: string): Observable<Country[]>{
    const nameUrl = `${this._url}/capital/${query}`
    return this.http.get<Country[]>(nameUrl, { params: this.httpParams })
  }

  getCountryByAlphaCode(code: string): Observable<Country[]>{
    const nameUrl = `${this._url}/alpha/${code}`
    return this.http.get<Country[]>(nameUrl)
  }
  
  getCountriesByRegion(region: string): Observable<Country[]>{
    const nameUrl = `${this._url}/region/${region}`
    return this.http.get<Country[]>(nameUrl, { params: this.httpParams })
  }

  constructor(private http: HttpClient) { }
}
