import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  constructor(private router: Router) {}
  onSubmit(userName: string, password: string) {
    if (userName && password) {
      this.router.navigate(['/jobs']);
    } else {
      alert('please fill data');
    }
  }
}
