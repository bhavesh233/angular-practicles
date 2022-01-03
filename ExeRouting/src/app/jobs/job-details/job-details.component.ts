import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { JobData } from '../job.module';
import { PostJobService } from '../post-job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {
  jobDetails: JobData[] = [];
  jobDetail!: {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postJobService: PostJobService
  ) {}

  ngOnInit() {
    this.jobDetails = this.postJobService.postData;
    this.postJobService.postDetailsShow.subscribe((ob: Object) => {
      this.jobDetail = ob;
    });
    console.log(this.jobDetail);
    
  }

  onEdit() {
    this.router.navigate(['post-job'], { relativeTo: this.route });
  }
}
