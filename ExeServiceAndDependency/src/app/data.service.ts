export class DataService {
  studentArray: { name: string; college: string; loginTime: Date }[] = [];

  addStudentData(name: string, college: string, loginTime: Date) {
    this.studentArray.push({
      name: name,
      college: college,
      loginTime: loginTime,
    });
  }
}
