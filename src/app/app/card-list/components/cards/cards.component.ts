import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerHandlerService } from 'src/app/services/player-handler.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public cards = [
    {
      title: 'Fjord Saguenay',
      src: './assets/images/IMG_12.png',
    },
    {
      title: 'Bruce Peninsula Park',
      src: './assets/images/IMG_13.png',
    },
    {
      title: 'Algonquin & Bon Echo Park',
      src: './assets/images/IMG_16.png',
    },
    {
      title: 'Western Canada',
      src: './assets/images/IMG_14.png',
    },
  ]

  constructor(
    @Inject(Router) private router: Router,
    @Inject(PlayerHandlerService) private playerHandlerService: PlayerHandlerService,
  ) { }

  ngOnInit(): void { }

  goToLink(url: string[], i: number) {
    this.playerHandlerService.index$.next(i);
    this.router.navigate(url);
  }
}
