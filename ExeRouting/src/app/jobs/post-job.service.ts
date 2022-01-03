import { EventEmitter } from '@angular/core';
import { JobData } from './job.module';

export class PostJobService {
  postData: JobData[] = [];

  postDetailsShow = new EventEmitter<Object>();

  onSubmit() {}

  addPost(
    id: string,
    title: string,
    company: string,
    place: string,
    time: Date
  ) {
    this.postData.push({
      id: +id,
      title: title,
      company: company,
      place: place,
      time: time,
    });
  }
}
