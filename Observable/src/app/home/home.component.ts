import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

  //   const customIntervalObservable = Observable.create((observer) => {
  //     let count = 0;
  //     setInterval(() => {
  //       observer.next(count);
  //       if (count === 7) {
  //         observer.complete();
  //       }
  //       if (count > 3) {
  //         observer.error(new Error('Count is greater than 3'));
  //       }
  //       count++;
  //     }, 1000);
  //   });

  //   this.firstObsSubscription = customIntervalObservable
  //     .pipe(
  //       map((data: number) => {
  //         return 'Round :' + (data + 1);
  //       })
  //     )
  //      .subscribe(
  //       (data) => {
  //         console.log('Round :' + data);
  //       },
  //       (error) => {
  //         console.log(error);
  //         alert(error.message);
  //       },
  //       () => {
  //         console.log('completed');
  //       }
  //     );
  // }
  // ngOnDestroy() {
  //   this.firstObsSubscription.unsubscribe();
  // }
  }
}