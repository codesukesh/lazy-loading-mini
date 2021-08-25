import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponentComponent } from "./components/home-component/home-component.component";

const homeRoutes:Routes=[
    {path: '', component: HomeComponentComponent}
];

@NgModule({
    imports:[RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule{}