import { Component, Input } from '@angular/core';
import { DataService } from './data.service';
import { AppSidebarService } from './sidebar.service';
import { GraphUser } from '../shared/models/graph-user.model';

@Component({
  selector: 'other',
  template: `<h1>Other {{user.email}}!</h1>
    <h3>{{menu}}</h3
    `,
  styles: [`h1 { font-family: Lato; }`]
})
export class OtherComponent  {
  user: GraphUser;
  menu;

  constructor(private dataService: DataService, private sidebarService: AppSidebarService){
    this.dataService.currentUser$.subscribe(u => this.user = u);
    this.sidebarService.menuItems$.subscribe(i => {
      this.menu = JSON.stringify(i);
    })
  }
}