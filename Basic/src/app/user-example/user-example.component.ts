import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-example',
  template: '<p style="background-color:powderblue;">this is hello</p> <br><p style="background-color:blue;">this is hello</p> <br><p style="background-color:;">this is hello</p>',

  styleUrls: ['./user-example.component.css']
})
export class UserExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }



}
