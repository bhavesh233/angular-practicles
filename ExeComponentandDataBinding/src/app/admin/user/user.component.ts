import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Output() userData = new EventEmitter<{
    firstName: string;
    lastName: string;
    country: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(firstname, lastName, country) {
    this.userData.emit({
      firstName: firstname.value,
      lastName: lastName.value,
      country: country.value,
    });
    console.log(firstname.value);
    
  }
}
