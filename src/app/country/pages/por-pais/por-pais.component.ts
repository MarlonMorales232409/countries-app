import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { tap } from 'rxjs';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`li {cursor: pointer}`]
})
export class PorPaisComponent {
  
  suggestedCountries : Country[] = []
  countries          : Country[] = []
  query              : string = ''
  isError            : boolean = false
  showSuggestions    : boolean = false

 

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

  onSuggestions( event: string){

    this.isError = false
    this.query = event

    this.countryService.searchCountry(event)
    .subscribe({
      next: (resp) => this.suggestedCountries = resp.splice(0,5),
      error: () => this.suggestedCountries = []
    })

    this.showSuggestions = event.trim().length >= 1 ? true : false
    
  }

  constructor(private countryService: CountryService){}
}
