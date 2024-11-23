import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  showMenu:boolean = false;

  constructor(
      private authService: AuthService
      ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
        this.showMenu = true;
    }
  }

}
