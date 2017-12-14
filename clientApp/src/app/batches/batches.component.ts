<<<<<<< HEAD
import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatSort, MatTableDataSource, MatCheckbox} from '@angular/material';
import {Batch} from '../domain/batch';
=======
import { Component, OnInit } from '@angular/core';
import {MatFormField} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import {MatOptionModule} from '@angular/material';
import {FormControl} from '@angular/forms';
>>>>>>> e767e60584eaf5eda006c149e74b2ba42a6cc4b2

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BatchesComponent implements OnInit, AfterViewInit {

<<<<<<< HEAD
  panelOpenState = false;

  batchValues = ['Checkbox', 'Name', 'Curriculum', 'Focus', 'Trainer/Co-Trainer', 'Location', 'Building', 'Room', 'StartDate', 'EndDate', 'Icons'];
  batchData = new MatTableDataSource(BatchData);

  @ViewChild(MatSort) sort: MatSort;
=======
  batchValues = ['Name', 'Curriculum', 'Focus', 'Trainer/Co-Trainer', 'Loocation', 'Building', 'Room', 'Start Date', 'End Date'];
  datebetween = 0;
>>>>>>> e767e60584eaf5eda006c149e74b2ba42a6cc4b2

  Curriculums = [
    {value: 'java-0', viewValue: 'JAVA'},
    {value: 'c++-1', viewValue: 'C++'},
    {value: 'angular-2', viewValue: 'ANGULAR 4'}
  ];

  focuses = [
    {value: 'microservices-0', viewValue: 'Microservices'},
    {value: 'focus2-1', viewValue: 'Focus 2'},
    {value: 'focus3-2', viewValue: 'Focus 3'}
  ];

  skills = new FormControl();

  skillsList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  trainers =  [
    {value: 'trainer-0', viewValue: 'August Duet'},
    {value: 'trainer-1', viewValue: 'Emily Higgins'},
    {value: 'trainer-2', viewValue: 'Steven Kelsey'} ];

  // locations = [
  //   {value: 'location-0', viewValue: 'Revature HQ - Reston,VA'},
  //   {value: 'location-1', viewValue: 'CUNY - SPS,NY'}
  // ];

  locations: any[] = [
    {
      'location': 'Reston HQ - Reston, VA',
      'building': [
        {
          'name': 'Douglas  Pace', 'rooms': [{'name': '101'}]
        },
        {
          'name': 'Mcleod  Mueller'
        },
      ]
    },
    {
      'location': 'CUNY - New York, NY',
      'building': [
        {
          'name': 'SPS'
        },
        {
          'name': 'QUEENS COLLEGE'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.batchData.sort = this.sort;
  }

}


export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const BatchData: Batch[] = [
  {name: 'batch1', startDate: new Date('February 4, 2017 10:13:00'), endDate: new Date('February 14, 2017 20:24:00'),
    curriculum: 'Java', focus: 'Microservices', trainer: 'Steve', cotrainer: 'Sarah', location: 'here', building: 'buildo', room: 'roo'},
  {name: 'batch2', startDate: new Date('February 4, 2017 10:13:00'), endDate: new Date('February 14, 2017 20:24:00'),
    curriculum: 'Java', focus: 'Microservices', trainer: 'Steve', cotrainer: 'Sarah', location: 'here', building: 'buildo', room: 'roo'}
];