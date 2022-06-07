import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule, MatButtonModule } from '@angular/material/button';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]

})
export class MaterialModule { }
