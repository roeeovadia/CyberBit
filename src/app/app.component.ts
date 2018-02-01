import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Console } from '@angular/core/src/console';
import * as _ from 'lodash';


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
        let selected = [];
        for (let i = 0; i < this.data.device_groups.length; i++) {
          let devices = _.filter(
            this.data.device_groups[i].devices, { 'active': 1 },
            false);
          
          for (let j = 0; j < devices.length; j++) {
            this.DataService.selected.devices.push({
              id: devices[j].id,
              name: devices[j].name
            })
            // alert(devices.length)

          }

          console.log(selected)
        }
        // this.DataService.selected.devices.push({
        //   "id": 11,
        //   "name": "device 11",
        // })

      },
      (err) => {
        console.error(err)
      },
      () => {
        console.log('done loading data')
      }
    )
  }

  onChange(data) {
    alert(data)

  }
}


