import { Component, DestroyRef, Inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PlayerHandlerService } from 'src/app/services/player-handler.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  public index = 0;

  constructor(
    @Inject(PlayerHandlerService) private playerHandlerService: PlayerHandlerService,
    @Inject(DestroyRef) private destroyRef: DestroyRef
  ) { }

  ngOnInit(): void {
    this.playerHandlerService.index$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(i => {
      this.index = i;
    });
  }

}
