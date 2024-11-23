import { Component, OnInit } from '@angular/core';
import {ActionsService} from "../../../shared/services/actions.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
      private actionsService: ActionsService
  ) { }

  ngOnInit(): void {
    this.actionsService.showLoginMenu.next(false);
  }

}
