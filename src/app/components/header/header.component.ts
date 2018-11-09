import { Component, Input, OnInit } from '@angular/core';
import { MENUITEMS } from '../../mock-data/mock-menu-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() notifications: number;

  menuItems = MENUITEMS;

  setActive(activeTitle) {
    const mainIndex = MENUITEMS.findIndex(item => item.title === activeTitle);

    this.menuItems = MENUITEMS.map((menuItem, index) => {
      return Object.assign({}, menuItem, {active: index === mainIndex});
    });
  }

  ngOnInit() {
    this.setActive('Overview');
  }

  receiveValue($event) {
    this.setActive($event);
  }

}
