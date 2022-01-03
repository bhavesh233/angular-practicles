export class LoginService {
  jobData: {
    id: number;
    title: string;
    company: string;
    place: string;
    time: Date;
  }[] = [];

  onSubmit() {}

  addPost(
    id: string,
    title: string,
    company: string,
    place: string,
    time: Date
  ) {
    this.jobData.push({
      id: +id,
      title: title,
      company: company,
      place: place,
      time: time,
    });
  }
}
