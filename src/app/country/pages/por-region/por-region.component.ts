import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { tap } from 'rxjs';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
})
export class PorRegionComponent {

  // continents: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC',]
  continents: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']

  activeRegion: string = 'Selecciona una region'

  countries: Country[] = []

  getActiveElement( region:string ){
    return this.activeRegion === region ? 'btn btn-primary mx-1 my-2' : 'btn btn-outline-primary mx-1 my-2'
  }

  setActiveRegion( region:string ){
    if(region === this.activeRegion) return
    
    this.activeRegion = region

    this.countryService.getCountriesByRegion(region)
    .subscribe({
      next: (resp)=> this.countries = resp,
      error: (error)=> console.log(error)
    })
  }

  constructor(private countryService: CountryService){}

}
