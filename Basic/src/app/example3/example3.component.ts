import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css'],
})
export class Example3Component implements OnInit {
  name = '';
  newArray: String[] = [];
  constructor() {}

  ngOnInit(): void {}

  addArrayMethod() {
    this.newArray.push(this.name);
    console.log(this.newArray);
    this.name = '';
  }
}
