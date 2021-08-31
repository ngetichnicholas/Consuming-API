import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../student.service";


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  Student: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadStudents()
  }

  // Get Students list
  loadStudents() {
    return this.restApi.getStudents().subscribe((data: {}) => {
      this.Student = data;
    })
  }

}
