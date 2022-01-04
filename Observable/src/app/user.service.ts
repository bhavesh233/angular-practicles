import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  
  //   activattedEmitter = new EventEmitter<boolean>();
  activatedEmitter = new Subject<boolean>();
}
