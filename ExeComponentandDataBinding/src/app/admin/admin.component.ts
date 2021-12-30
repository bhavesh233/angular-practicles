import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  userArray = [];
  constructor() {}

  ngOnInit(): void {}
  adminMethod(adminData: {
    firstName: string;
    lastName: string;
    country: string;
  }) {
    this.userArray.push({
      firstName: adminData.firstName,
      lastName: adminData.lastName,
      country: adminData.country,
    });
  }
}
