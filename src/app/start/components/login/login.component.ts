import { Component, OnInit } from '@angular/core';
import {ActionsService} from "../../../shared/services/actions.service";
import {Location} from "@angular/common";
import {AuthService} from "../../../shared/services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        private actionsService: ActionsService,
        private _location: Location,
        private _authService: AuthService,
    ) { }

    ngOnInit(): void {
        this.actionsService.showLoginMenu.next(false);
    }
    goBack() {
        this._location.back();
    }
    doLogin() {
        this._authService.signIn();
    }
}
