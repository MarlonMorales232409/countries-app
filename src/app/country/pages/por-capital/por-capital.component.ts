import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {
  
  query     : string = ''
  isError   : boolean = false
  countries : Country[] = []

 

  onSearch( query: string ){

    this.isError = false
    this.query = query
    
    this.countryService.searchCapital(this.query)
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

    
  }

  constructor(private countryService: CountryService){}

}
