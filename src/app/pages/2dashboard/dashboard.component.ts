import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';

interface CardSettings {
  title: string;
  type: string;
  data: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  private alive = true;

  solarValue: number;
  arrivalsCard: CardSettings = {
    title: 'Arrivals',
    type: 'primary',
    data: '25',
  };
  departuresCard: CardSettings = {
    title: 'Departures',
    type: 'success',
    data: '2',
  };
  accommodationsCard: CardSettings = {
    title: 'Residents',
    type: 'info',
    data: '170',
  };
  guestsCard: CardSettings = {
    title: 'Guests',
    type: 'warning',
    data: '5',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.arrivalsCard,
    this.departuresCard,
    this.accommodationsCard,
    this.guestsCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.arrivalsCard,
        type: 'warning',
      },
      {
        ...this.departuresCard,
        type: 'primary',
      },
      {
        ...this.accommodationsCard,
        type: 'danger',
      },
      {
        ...this.guestsCard,
        type: 'info',
      },
    ],
    dark: this.commonStatusCardsSet,
  };

  constructor(private themeService: NbThemeService,
              private solarService: SolarData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
      });

    this.solarService.getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.solarValue = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
