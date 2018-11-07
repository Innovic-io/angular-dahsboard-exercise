import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardItem } from '../../../models/dashboard-card-items.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard-card-items',
  templateUrl: './dashboard-card-items.component.html',
  styleUrls: ['./dashboard-card-items.component.css']
})
export class DashboardCardItemsComponent  {

  @Input() cardItem: CardItem;

}
