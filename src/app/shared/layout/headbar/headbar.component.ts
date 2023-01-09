import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.scss']
})
export class HeadbarComponent implements OnInit {
  showPart:boolean;

  constructor() {
    this.showPart = false;
   }

  ngOnInit(): void {
  
  }

  showParticipants() {
    this.showPart = !this.showPart;
  }

}
