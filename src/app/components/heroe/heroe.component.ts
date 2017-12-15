import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] != null) {
        this.heroe = heroesService.getHeroe(params['id']);
      }

    });
  }

}

