import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  showMenu:boolean = false;

  constructor(
      private authService: AuthService,
      public router: Router,
      ) {}

  ngOnInit(): void {
    this.authService.signImBehavior.subscribe((isLoggedIn: boolean) => {
      this.showMenu = isLoggedIn;
    });
  }

}
