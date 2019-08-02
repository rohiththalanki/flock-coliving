import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'ngx-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent {

  settings = {
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      ack: {
        title: 'Ack #',
        type: 'string',
      },
      room: {
        title: 'Room',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor() {
    const data = [{
      name: 'Matrix reloaded',
      ack: 'FK5667874',
      room: '003 GF B1',
      status: 'In-House',
    },
      {
        name: 'Madness Overloaded',
        ack: 'FK5667874',
        room: '208 SF B3',
        status: 'In-House',
      },
      {
        name: 'Destruction Infinity',
        ack: 'FK5667874',
        room: '006 GF B3',
        status: 'In-House',
      }];
    this.source.load(data);
  }
}
