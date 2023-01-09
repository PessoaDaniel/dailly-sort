import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-sigle',
  templateUrl: './sigle.component.html',
  styleUrls: ['./sigle.component.scss']
})

export class SigleComponent implements OnInit {
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
    this.showSpin = false
  }

  ngOnInit(): void {
    this.spinner.show()
  }
  
  initSort() {
    // this.showSpin = true;
    this.sortStarted = true;
    this.showCards = true;
  }

  getNexToPresent(){

  }
  slide($event: Event){
    let target = $event.target; 
  }

}
