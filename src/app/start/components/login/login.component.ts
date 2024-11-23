import { Component, OnInit } from '@angular/core';
import {ActionsService} from "../../../shared/services/actions.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
      private actionsService: ActionsService,
  ) { }

  ngOnInit(): void {
    this.actionsService.showLoginMenu.next(false);
  }

}
