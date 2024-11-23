import { Component, OnInit } from '@angular/core';
import {ActionsService} from "../../../shared/services/actions.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
      private actionsService: ActionsService,
      private _location: Location
  ) { }

  ngOnInit(): void {
    this.actionsService.showLoginMenu.next(false);
  }
  goBack() {
    this._location.back();
  }

}
