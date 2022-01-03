import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { PostJobService } from '../post-job.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css'],
})
export class PostJobComponent implements OnInit {
 
  constructor(private postJobService:PostJobService) {}

  ngOnInit(): void {}
  onPostCreated(id: string, title: string, company: string, place: string) {
    const postTime = new Date();
    this.postJobService.addPost(id, title, company, place, postTime);
  }
}
