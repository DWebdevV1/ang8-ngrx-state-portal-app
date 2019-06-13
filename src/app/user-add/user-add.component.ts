import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/models/user';
import {Store} from '@ngrx/store';
import {ResetUserAction, SaveUserAction} from '../shared/state/actions/user.action';
import {UserModel} from '../shared/state/models/user-model';

@Component({
  selector: 'dw-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  userAddForm: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder, private userStore: Store<{ users }>) {

    this.userAddForm = this.formBuilder.group({
      userID: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]]
    });

  }

  ngOnInit() {
  }

  onSubmitForm(newUser: UserModel) {
    if (newUser && this.userAddForm.valid) {
      console.log(newUser);
      this.userStore.dispatch(new SaveUserAction(newUser));
      this.user = newUser;
    }
  }

  getLastUserFromStore() {
    this.userStore.select(state => state).subscribe((storedUser) => {
      this.user = storedUser.users;
      console.log('Userd loaded from Store!');
    });
  }

  resetStoredUser() {
    this.userStore.dispatch(new ResetUserAction());
    console.log('User Store resetted!');
  }

}
