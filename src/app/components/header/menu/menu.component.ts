import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

import { IMenuItem } from '../../../models/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input() menuItems: IMenuItem[];
  @Output() msgEvent = new EventEmitter();

  emitChild(title) {
    this.msgEvent.emit(title);
  }
}
