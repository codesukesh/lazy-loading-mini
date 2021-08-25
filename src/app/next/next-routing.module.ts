
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NextComponent } from "./components/next/next.component";

const nextRoutes:Routes=[
    {
        path:'',
        component: NextComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(nextRoutes)],
    exports: [RouterModule]
})
export class NextRoutingModule{}