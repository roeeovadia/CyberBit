import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxRadioListComponent } from './checkbox-radio-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule      
  ],
  declarations: [
    CheckboxRadioListComponent],
  exports: [
    CheckboxRadioListComponent]

})
export class CheckboxRadioListModule { }