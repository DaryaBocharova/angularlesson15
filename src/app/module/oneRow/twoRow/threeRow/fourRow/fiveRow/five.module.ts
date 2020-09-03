import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent} from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from '../three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';


@NgModule({
  declarations: [OneComponent, TwoComponent, ThreeComponent, FourComponent, FiveComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FiveModule { }
