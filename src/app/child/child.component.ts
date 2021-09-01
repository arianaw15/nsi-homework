import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  counter: number = 0;

@Output() countEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

countClick(){
    this.counter +=1;
    this.countEvent.emit(this.counter);
  }

}
