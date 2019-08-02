import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { ProgressInfo, StatsProgressBarData } from '../data/stats-progress-bar';

@Injectable()
export class StatsProgressBarService extends StatsProgressBarData {
  private progressInfoData: ProgressInfo[] = [
    {
      title: 'Breakfast',
      value: 170,
      activeProgress: 20,
      description: 'Same as yesterday',
    },
    {
      title: 'Lunch',
      value: 170,
      activeProgress: 10,
      description: 'Less than yesterday',
    },
    {
      title: 'Dinner',
      value: 170,
      activeProgress: 55,
      description: 'Better than yesterday (55%)',
    },
  ];

  getProgressInfoData(): Observable<ProgressInfo[]> {
    return observableOf(this.progressInfoData);
  }
}
