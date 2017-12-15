import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  filtro: String;
  constructor(private router: Router, private filterService: HeroesService) { }

  ngOnInit() {
  }

  filtrarheroe() {
    this.filterService.setFiltro(this.filtro);
  }

}
