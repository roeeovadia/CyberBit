import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  moduleId: 'app-sammary',
  selector: 'app-sammary',
  templateUrl: './sammary.component.html',
  styleUrls: ['./sammary.component.css']
})
export class SammaryComponent implements OnInit {

  constructor(public DataService: DataService) { }

  ngOnInit() {
    let s = this.DataService.selected
  }
  sendRequst() { }

}
