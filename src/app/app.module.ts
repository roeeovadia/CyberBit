import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { DevicesModule } from './devices/devices.module';
import { CheckboxRadioListModule } from './checkbox-radio-list/checkbox-radio-list.module';
import { SammaryModule } from './sammary/sammary.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DevicesModule,
    CheckboxRadioListModule,
    SammaryModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
