import { Component, OnInit } from '@angular/core';
import {ActionsService} from "../../../shared/services/actions.service";

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.scss']
})
export class WellcomeComponent implements OnInit {

  constructor(
      private actionsService: ActionsService,
  ) { }

  ngOnInit(): void {
    this.actionsService.showLoginMenu.next(true);
  }

}
