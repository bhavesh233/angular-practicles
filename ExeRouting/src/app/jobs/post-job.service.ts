import { JobData } from './job.module';

export class PostJobService {
  listShow: boolean = true;
  postData: JobData[] = [
    {
      id: '12',
      title: 'ABC',
      company: 'BHA',
      place: 'asd',
      time: new Date(),
    },
    {
      id: '112',
      title: 'CDf',
      company: 'Basd',
      place: 'asd',
      time: new Date(),
    },
  ];

  addPost(
    id: string,
    title: string,
    company: string,
    place: string,
    time: Date
  ) {
    this.postData.push({
      id: id,
      title: title,
      company: company,
      place: place,
      time: time,
    });
  }
  updateData(
    id: string,
    Id: string,
    title: string,
    company: string,
    place: string,
    time: Date
  ) {
    let cnt = -1;
    let server = this.postData.find((s) => {
      cnt = cnt + 1;
      return s.id === id;
    });
    this.postData[cnt].id = Id;
    this.postData[cnt].title = title;
    this.postData[cnt].company = company;
    this.postData[cnt].place = place;
    this.postData[cnt].time = time;
  }
}
