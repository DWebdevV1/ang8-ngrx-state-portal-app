import {Action, createAction} from '@ngrx/store';
import { UserModel } from '../models/user-model';

export enum UserActionsTypes {
  GET_USER = '[USER ACTION] GET USER',
  SAVE_USER = '[USER ACTION] USER SAVED',
  RESET_USER = '[USER ACTION] USER RESETTED'
}

export class SaveUserAction implements Action {
  readonly  type = UserActionsTypes.SAVE_USER;

  constructor(public payload: UserModel) { }
}

export class ResetUserAction implements Action {
  readonly  type = UserActionsTypes.RESET_USER;
}

export type UserAction = SaveUserAction | ResetUserAction;
