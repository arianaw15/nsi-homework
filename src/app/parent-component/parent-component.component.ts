import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  counter = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

receiveCount($event){
  this.counter = $event

}

}


