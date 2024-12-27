import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ActionsService} from "../../services/actions.service";

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.scss']
})
export class HeadbarComponent implements OnInit {
  showLogin:boolean = false;
  isLoggedIn = false;

  constructor(
      private authService: AuthService,
      private actionsService: ActionsService
  ) {}

  ngOnInit(): void {
    this.actionsService.showLoginMenu.subscribe({
      next: showLogin => {
        this.showLogin = showLogin;
        if (this.authService.isLoggedIn()) {
         this.isLoggedIn = true;
        }
      }});
  }

  signOut() {
    this.authService.signOut();
  }
}
