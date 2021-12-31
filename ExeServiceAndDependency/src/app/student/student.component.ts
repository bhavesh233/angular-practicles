import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  studentsArray: { name: string; college: string; loginTime: Date }[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.studentsArray = this.dataService.studentArray;
  }
}
