import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelListComponent } from './components/panel-list/panel-list.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardListRoutingModule } from './card-list-routing.module';
import { CardListComponent } from './view/card-list.component';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
import { GravityBtnDirective } from 'src/app/directives/gravity-btn.directive';

@NgModule({
  declarations: [
    CardListComponent,
    PanelListComponent,
    CardsComponent,
    PanelListComponent,
    GravityBtnDirective
  ],
  imports: [
    CommonModule,
    CardListRoutingModule,
    TranslocoRootModule
  ]
})
export class CardListModule { }
