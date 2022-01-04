import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JobData } from '../job.module';
import { PostJobService } from '../post-job.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css'],
})
export class PostJobComponent implements OnInit {
  id: string | undefined;
  title: string | undefined;
  company: string | undefined;
  place: string | undefined;

  jonDetais: JobData[] = [];
  match: boolean = false;

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
    private postJobService: PostJobService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      let data = this.postJobService.postData.find((s) => {
        return s.id === param['id'];
      });
      if (data) {
        this.match = true;
      }
      this.jobDetail = Object.assign({}, data);
    });

    this.jonDetais = this.postJobService.postData;
  }
  onPostCreated(id: string, title: string, company: string, place: string) {
    const postTime = new Date();
    if (this.match) {
      this.postJobService.updateData(
        this.jobDetail.id,
        id,
        title,
        company,
        place,
        postTime
      );
    } else {
      this.postJobService.addPost(id, title, company, place, postTime);
    }

    this.router.navigate(['/jobs', 'job-details']);
  }
}
