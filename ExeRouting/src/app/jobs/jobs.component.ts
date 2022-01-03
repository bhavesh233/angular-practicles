import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { JobData } from './job.module';
import { PostJobService } from './post-job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postJobService: PostJobService
  ) {}
  showJoblist = true;

  jobDetails: JobData[] = [];

  ngOnInit() {
    this.jobDetails = this.postJobService.postData;
  }

  onSelect() {
    //   if (this.showJoblist) {
    //     this.router.navigate(['job-list'], { relativeTo: this.route });
    //     this.showJoblist = false;
    //   } else {
    //     this.router.navigate(['/jobs']);
    //     this.showJoblist = true;
    //   }

    this.showJoblist = !this.showJoblist;
  }

  onPost() {
    this.router.navigate(['post-job'], { relativeTo: this.route });
  }
}
