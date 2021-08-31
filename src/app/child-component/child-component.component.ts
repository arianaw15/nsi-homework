import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  counter: number = 0;

@Output() countEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

countClick(){
    this.counter +=1;
    this.countEvent.emit(this.counter);                       )
  }

}
