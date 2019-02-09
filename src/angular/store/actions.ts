import { Action } from '@ngrx/store';

export enum ActionTypes {
    Increment = '[main] Increment',
    Decrement = '[main] Decrement',
    AddUser = '[main] AddUser',
    DeleteUser = '[main] DeleteUser'
}

export class Increment implements Action {
    readonly type = ActionTypes.Increment;
}

export class Decrement implements Action {
    readonly type = ActionTypes.Decrement;
}

export class AddUser implements Action {
    readonly type = ActionTypes.AddUser;
    constructor(public payload: string) {}
}

export class DeleteUser implements Action {
    readonly type = ActionTypes.DeleteUser;
    constructor(public payload: number) {}
}