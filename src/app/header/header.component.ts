import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderAppComponent {
  @Output() featureSelected = new EventEmitter<string>();
  
  onSelect(feature: string){
    this.featureSelected.emit(feature);
    // console.log(feature);
  }
  constructor() { }

}
