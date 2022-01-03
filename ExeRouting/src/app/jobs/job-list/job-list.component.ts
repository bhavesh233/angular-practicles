import { Component, Input, OnInit } from '@angular/core';

import { JobData } from '../job.module';
import { PostJobService } from '../post-job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  dataList: JobData[] = [];

  @Input()
  data!: {
    id: number;
    title: string;
    company: string;
    place: string;
    time: Date;
  };
  constructor(private postJobService: PostJobService) {}

  ngOnInit() {
    this.dataList = this.postJobService.postData;
    console.log(this.dataList);
  }
  onClick(object:Object) {
    // console.log(object);
    this.postJobService.postDetailsShow.emit(object);

  }
}
