import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./view/home.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    }
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRoutingModule { }