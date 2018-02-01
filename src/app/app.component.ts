import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CyberBit Test';
  private _data: any;
  public get data() {
    return this._data
  }
  public set data(val) {
    this._data = val;
  }
  constructor(public DataService: DataService) {

  }
  ngOnInit() {
    this.DataService.getData().subscribe(
      (data) => {
        this.data = data;
      },
      (err) => {
        console.error(err)
      },
      () => {
        console.log('done loading data')
      }
    )
  }

  onChange(data){
    alert(data)

  }
}


