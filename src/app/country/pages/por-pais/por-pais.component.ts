import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent {
  
  query: string = ''

  onSearch(){
    console.log(this.query)

    this.countryService.searchCountry(this.query)
    .subscribe((resp: any) => {
      console.log(resp)
    })
  }

  constructor(private countryService: CountryService){}
}
