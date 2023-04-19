import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import participants from '../../../json/participans.json';

@Component({
  selector: 'app-sigle',
  templateUrl: './sigle.component.html',
  styleUrls: ['./sigle.component.scss']
})
export class SigleComponent implements OnInit {
  participants:Array<any>;
  showCards:boolean;
  sortStarted:boolean;
  sortFinished:boolean;   
  showAll:boolean;
  showSpin:boolean;


  constructor(private spinner: NgxSpinnerService) { 
    this.showCards = false;
    this.sortStarted = false;
    this.sortFinished = false;
    this.showAll = false;
    this.showSpin = false;
    this.participants = participants;
  }

  ngOnInit(): void {
    this.spinner.show()
  }
  
  initSort() {
    this.sortStarted = true;
    this.showCards = true;
  }

  getNexToPresent(){

  }
  slide($event: Event){
    let target = $event.target; 
  }

  sort() {
    participants.sort(() => {
      return - 1
    });
    this.initSort();
  }

}
