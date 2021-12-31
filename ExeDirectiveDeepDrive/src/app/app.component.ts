import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  colorArray = [
    { color: 'red', text: 'this is red' },
    { color: 'blue', text: 'this is blue' },
    { color: 'white', text: 'this is white' },
  ];


}
