import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  _filtro: string;
  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.heroes = this.heroesService.getHeroes('');
  }

  ngOnInit() {
    this.heroesService.getFiltro().subscribe(filtro => { this.heroes = this.heroesService.getHeroes(filtro); });
  }

  verHeroe(idHeroe: number) {
    this.router.navigate(['/heroe', idHeroe]);
  }
}


