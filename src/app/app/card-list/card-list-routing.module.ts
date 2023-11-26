import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardListComponent } from "./view/card-list.component";

const cardListRoutes: Routes = [
    {
        path: '',
        component: CardListComponent,
    }
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(cardListRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class CardListRoutingModule { }