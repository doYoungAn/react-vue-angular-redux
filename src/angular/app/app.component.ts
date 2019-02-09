import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { syntaxHighlight } from './../../utils';
import { Increment, Decrement, AddUser, DeleteUser } from './../store/actions';

@Component({
    selector: 'angular-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    public all$: Observable<any>;
    public user: string = '';

    constructor(
        private store: Store<any>
    ) {
        this.all$ = store.pipe(select('main'));
    }

    ngOnInit() {}

    public increment(): void {
        this.store.dispatch(new Increment());
    }

    public decrement(): void {
        this.store.dispatch(new Decrement());
    }

    public addUser(): void {
        this.store.dispatch(new AddUser(this.user));
        this.user = '';
    }

    public deleteUser(index: number): void {
        this.store.dispatch(new DeleteUser(index));
    }

    public syntaxHighlight(json: any) {
        return syntaxHighlight(json);
    }
}