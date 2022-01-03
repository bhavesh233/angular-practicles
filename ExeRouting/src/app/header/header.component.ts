import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSelect(input: string) {
    if (input == 'login') {
      this.router.navigate(['/login']);
    } else if (input == 'jobs') {
      this.router.navigate(['/jobs']);
    } else {
      this.router.navigate(['']);
    }
  }
}
