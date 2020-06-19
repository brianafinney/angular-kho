import { Component, Input } from '@angular/core';
import { DataService } from './data.service';
import { GraphUser } from '../shared/models/graph-user.model';
@Component({
  selector: 'more-other',
  template: `<h1>Some MORE Other {{user.givenName}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class MoreOtherComponent  {
  user: GraphUser;

  constructor(private dataService: DataService){
    this.dataService.currentUser$.subscribe(u => this.user = u);
  }
}