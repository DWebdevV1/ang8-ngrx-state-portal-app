import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {UserModel} from '../shared/state/models/user-model';

@Component({
  selector: 'dw-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  latestUser: UserModel;

  constructor(private store: Store<{ users }>) { }

  ngOnInit() {
    this.store.select(store => store).subscribe(res => {
      this.latestUser = res.users;
    });
  }

}
