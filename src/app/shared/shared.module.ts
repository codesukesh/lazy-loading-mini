import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadImageDirective } from './directives/lazyload-image.directive';



@NgModule({
  declarations: [LazyloadImageDirective],
  imports: [
    CommonModule
  ],
  exports:[LazyloadImageDirective]
})
export class SharedModule { }
