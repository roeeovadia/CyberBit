import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import * as _ from 'lodash';

@Component({
  moduleId: 'app-sammary',
  selector: 'app-sammary',
  templateUrl: './sammary.component.html',
  styleUrls: ['./sammary.component.css']
})
export class SammaryComponent implements OnInit {
  sammary:any;
  constructor(public DataService: DataService) { }

  ngOnInit() {
      this.sammary = this.DataService.selected
  }
  sendRequst() {
    _.filter(this.sammary, ['id']);
    console.log(JSON.stringify(_.filter(this.sammary, ['id', false])))

   }

}
