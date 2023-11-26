import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImagesComponent } from './components/images/images.component';
import { PanelComponent } from './components/panel/panel.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './view/home.component';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@NgModule({
  declarations: [
    HomeComponent,
    ImagesComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslocoRootModule
  ]
})
export class HomeModule { }
