import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: 'devices-component',
  selector: 'devices-component',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  @Input() devices: any
  constructor() { }

  ngOnInit() {
  }
  itemChange(id, isActive) {

  }
  checkSection(event){
    
    
  }
}
