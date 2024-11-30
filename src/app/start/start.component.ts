import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/services/auth.service";
import {ChildrenOutletContexts, Router} from "@angular/router";
import {slideInAnimation} from "../animations";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  animations: [slideInAnimation]
})
export class StartComponent implements OnInit {

  constructor(
      private authService: AuthService,
      private router: Router,
      private contexts: ChildrenOutletContexts
  ) {
    if (authService.isLoggedIn()) {
      router.navigate(['/']).then();
    }
  }

  ngOnInit(): void {}
  getRouteAnimationData():any {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
