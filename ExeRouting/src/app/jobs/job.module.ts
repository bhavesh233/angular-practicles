export class JobData {
  public id: string;
  public title: string;
  public company: string;
  public place: string;
  public time: Date;

  constructor(
    id: string,
    title: string,
    company: string,
    place: string,
    time: Date
  ) {
    this.id = id;
    this.title = title;
    this.company = company;
    this.place = place;
    this.time = time;
  }
}
