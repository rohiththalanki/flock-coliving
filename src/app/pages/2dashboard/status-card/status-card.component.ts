import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card >
      <div class="data-container">
        <p class="data status-{{ type }}">
          {{data}}
        </p>
      </div>

      <div class="details">
        <div class="title h5">{{ title }}</div>
      </div>
    </nb-card>
  `,
})
export class StatusCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() data: number;

}
