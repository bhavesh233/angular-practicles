import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { JobData } from '../job.module';
import { PostJobService } from '../post-job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit, OnChanges {
  jobDetails: JobData[] = [];
  listSelected: boolean = false;

  jobDetail: {
    id: string;
    title: string;
    company: string;
    place: string;
    time: Date;
  } = {
    id: '12',
    title: 'sad',
    company: 'gdf',
    place: 'dfgdfgd',
    time: new Date(),
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postJobService: PostJobService
  ) {
    this.listSelected = this.postJobService.listShow;
  }
  ngOnChanges() {}

  ngOnInit() {
    this.jobDetails = this.postJobService.postData;

    this.route.params.subscribe((param: Params) => {
      let server = this.jobDetails.find((s) => {
        return s.id === param['id'];
      });
      this.jobDetail = Object.assign({}, server);
      this.postJobService.listShow = true;
      this.listSelected = this.postJobService.listShow;
    });

    this.postJobService.listShow = false;
    this.listSelected = this.postJobService.listShow;
  }

  onEdit(object: JobData) {
    console.log(object.id);
    
    this.router.navigate(['/jobs', 'post-job',object.id], { relativeTo: this.route });
   
  }
}
