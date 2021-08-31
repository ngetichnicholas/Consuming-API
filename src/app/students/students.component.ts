import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../student.service";


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  Student: any = [];
  Instrument: any = []

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadStudents()
    this.loadInstruments()
  }

  // Get Students list
  loadStudents() {
    return this.restApi.getStudents().subscribe((data: {}) => {
      this.Student = data;
    })
  }

    // Get instrument list
    loadInstruments() {
      return this.restApi.getInstruments().subscribe((data: {}) => {
        this.Instrument = data;
      })
    }

}
