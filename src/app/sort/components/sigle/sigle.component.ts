import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import avaliableParts from '../../../json/participans.json';

@Component({
  selector: 'app-sigle',
  templateUrl: './sigle.component.html',
  styleUrls: ['./sigle.component.scss']
})
export class SigleComponent implements OnInit {
  participants: Array<any>;
  showCards: boolean;
  sortStarted: boolean;
  sortFinished: boolean;
  showAll: boolean;
  showSpin: boolean;
  presenters: any = [];
  finished = false;


  constructor(private spinner: NgxSpinnerService) {
    this.showCards = false;
    this.sortStarted = false;
    this.sortFinished = false;
    this.showAll = false;
    this.showSpin = false;
    this.participants = avaliableParts;
  }

  ngOnInit(): void {
    this.spinner.show()
  }

  initSort() {
    this.sortStarted = true;
    this.showCards = true;
  }

  slide($event: Event) {
    let target = $event.target;
  }

  sort() {
    if (this.participants.length > 0) {
      let random = this.shuffle(this.participants);
      this.presenters.push(random[0]);
      random.shift();
      this.participants = random;
      this.initSort();
      this.finished = false;
    } else {
      this.finished = true;
    }
  }

  private shuffle(array: any) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  reset() {
    window.location.reload();
  }
}
