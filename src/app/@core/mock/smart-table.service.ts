import { Injectable } from "@angular/core";
import { SmartTableData } from "../data/smart-table";

@Injectable()
export class SmartTableService extends SmartTableData {
  data = [
    {
      id: 1,
      firstName: 'Mark',
      mobile: 8989897662,
    },
    {
      id: 2,
      firstName: 'Saurabh',
      mobile: 8356877882,
    },
    {
      id: 3,
      firstName: 'Venkatesh',
      mobile: 9127675545,
    },
  ];

  getData() {
    return this.data;
  }
}
