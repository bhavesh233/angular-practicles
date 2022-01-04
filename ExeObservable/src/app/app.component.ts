import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  stringArray = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
  ];

  ngOnInit() {
    console.log(this.stringArray.length);

    const customStringObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(this.stringArray[count]);
        if (count === 3) {
          // observer.error(new Error("Do not use it"))
        }
        if (count === this.stringArray.length - 3) {
          observer.complete();
        }
        count++;
      }, 100);
    });

    customStringObservable.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        console.log('completed');
      }
    );
  }
}
