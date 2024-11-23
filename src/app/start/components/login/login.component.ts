import { Component, OnInit } from '@angular/core';
import {ActionsService} from "../../../shared/services/actions.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
      private actionsService: ActionsService,
      private _location: Location,
  ) { }

  ngOnInit(): void {
    this.actionsService.showLoginMenu.next(false);
  }
   goBack() {
    this._location.back();
   }
}
