import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-reservations',
  styleUrls: ['./reservations.component.scss'],
  templateUrl: './reservations.component.html',
})
export class ReservationsComponent implements OnDestroy {

  currentTheme: string;
  themeSubscription: any;
  type = 'week';
  types = ['week', 'month', 'year'];
  constructor(private themeService: NbThemeService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
