import { Component } from '@angular/core';

@Component({
  selector: 'vc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public menuItems = {
    logo: 'fa-anchor',
    menus: [
      {
        icon: 'fa-home'
      },
      {
        icon: 'fa-users'
      },
      {
        icon: 'fa-suitcase'
      },
      {
        icon: 'fa-calendar-alt'
      },
      {
        icon: 'fa-calculator'
      },
      {
        icon: 'fa-portrait'
      },
    ]
  };

}
