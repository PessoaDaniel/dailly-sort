import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(
      private authService: AuthService,
      private router: Router
  ) {
    if (authService.isLoggedIn()) {
      router.navigate(['/']).then();
    }
  }

  ngOnInit(): void {}

}
