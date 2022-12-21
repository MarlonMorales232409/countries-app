import { Component, Input } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { HttpClient } from '@angular/common/http';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  
  query     : string = ''
  isError   : boolean = false
  countries : Country[] = []

 

  onSearch( query: string ){

    this.isError = false
    this.query = query
    
    this.countryService.searchCountry(this.query)
    .subscribe({
      next: (resp) => this.countries = resp,
      error: () => {
        this.countries = []
        this.isError = true
      }
    })
  }

  constructor(private countryService: CountryService){}
}
