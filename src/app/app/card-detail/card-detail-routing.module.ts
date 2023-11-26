import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardDetailComponent } from "./view/card-detail.component";

const cardDetailRoutes: Routes = [
    {
        path: '',
        component: CardDetailComponent,
    }
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(cardDetailRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class CardDetailRoutingModule { }