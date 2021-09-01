import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  counter = 0

  constructor() { }

  ngOnInit(): void {
  }

  receiveCount($event) {
    this.counter = $event
  }
  countClickDestruction(){
    this.counter = 0
  }

}
