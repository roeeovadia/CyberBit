import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    FormsModule
  ],
  declarations: [DevicesComponent],
  exports: [DevicesComponent]
})
export class DevicesModule { }