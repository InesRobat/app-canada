import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './components/player/player.component';
import { CardDetailComponent } from './view/card-detail.component';
import { CardDetailRoutingModule } from './card-detail-routing.module';


@NgModule({
  declarations: [
    CardDetailComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    CardDetailRoutingModule
  ]
})
export class CardDetailModule { }
