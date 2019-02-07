import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { syntaxHighlight } from './../../utils';

@Component({
    selector: 'angular-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    public all$: Observable<any>;

    constructor(
        private store: Store<any>
    ) {
        this.all$ = store.pipe(select('main'));
    }

    ngOnInit() {}

    public syntaxHighlight(json: any) {
        return syntaxHighlight(json);
    }
}