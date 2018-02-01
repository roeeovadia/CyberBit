import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SammaryComponent } from './sammary.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SammaryComponent],
  exports: [SammaryComponent]
})
export class SammaryModule { }