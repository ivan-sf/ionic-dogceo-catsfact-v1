import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
})
export class CatComponent implements OnInit {

  @Input() cat:any;
  @Output() clickCat = new EventEmitter();

  onClick(){
    this.clickCat.emit(this.cat)
  }
 
  constructor() { }

  ngOnInit() {}

}
