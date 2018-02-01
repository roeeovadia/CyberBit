import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Console } from '@angular/core/src/console';



@Component({
  moduleId: 'app-checkbox-radio-list',
  selector: 'checkbox-radio-list',
  templateUrl: './checkbox-radio-list.component.html',
  styleUrls: ['./checkbox-radio-list.component.css']
})
export class CheckboxRadioListComponent implements OnInit {
  @Input() public data: any;
  @Input() public inputType: string = '';
  @Output() onChange = new EventEmitter()
  SelectedValue: any;
  constructor() { }

  ngOnInit() {
  }
  onItemChange(id) {
    console.log(id);

    this.onChange.emit(id)

  }
}
