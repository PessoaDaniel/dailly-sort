import { Component, OnInit } from '@angular/core';
import participants from '../json/participans.json';
@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  participantsQtd: number;
  constructor() { 
    this.participantsQtd = participants.length;
  }

  ngOnInit(): void {
  }

}
