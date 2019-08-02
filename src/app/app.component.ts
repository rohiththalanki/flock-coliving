/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, public authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.login('rohith', 'pass');
    this.analytics.trackPageViews();
  }
}
