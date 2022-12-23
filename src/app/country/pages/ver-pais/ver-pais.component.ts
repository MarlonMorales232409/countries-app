import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit{
[x: string]: any;

  country !: Country

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ){}

  ngOnInit(): void {
      this.activatedRoute.params
      .pipe(
        switchMap( ({ id })=> this.countryService.getCountryByAlphaCode(id)),
        tap((resp) => console.log(resp[0]))
      )
      .subscribe( (resp) => this.country = resp[0])
  }

}
