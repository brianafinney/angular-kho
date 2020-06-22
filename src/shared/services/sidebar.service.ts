import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { GraphUser } from '../models/graph-user.model';
import { take, share } from 'rxjs/operators';
import { DataService } from './data.service';
import { navigation } from '../../app/nav';

@Injectable({
  providedIn: 'root'
})
export class AppSidebarService {
  public menuItems$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(new Array<any>());

  constructor(private dataService: DataService) {
    this.dataService.currentUser$.subscribe(user => {
        this.menuItems$ = this.getCurrentUserMenu(user);
    });
  }

  private getCurrentUserMenu(user: GraphUser) {
 //   let items = navigation.filter()
    return of(navigation).pipe(
      share()
    ) as BehaviorSubject<any[]>;
  }
  
}
