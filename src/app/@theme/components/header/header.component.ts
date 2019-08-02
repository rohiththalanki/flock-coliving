import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  userMenu = [ { title: 'Profile', link: ['/profile'] }, { title: 'Logout' } ];

  constructor(private sidebarService: NbSidebarService,
              private authService: AuthService,
              private menuService: NbMenuService,
              private userService: UserData,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService) {
    this.menuService.onItemClick().subscribe((event) => {
      if (event.item.title === 'Logout') {
        this.logout();
      }
    });
  }

  ngOnInit() {
    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.user = users.flock);

    const { xl } = this.breakpointService.getBreakpointsMap();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  logout() {
    this.authService.signOut();
  }
}
