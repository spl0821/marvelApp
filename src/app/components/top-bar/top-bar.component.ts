import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { reset, search } from 'src/app/reducers/searcher.actions';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

    /**
     * Control for search input
     */
    searchInput = new FormControl('');

    /**
     * Creates an instance of TopBarComponent.
     * Dispatch reset action when user cleans input
     * @param {Store<{nameStartsWith: string}>} store
     */
    constructor(private store: Store<{nameStartsWith: string}>) {
        this.searchInput.valueChanges.subscribe(change => {
            if(change == ''){
                this.store.dispatch(reset());
            }
        })
    }

    ngOnInit(): void {
    }

    /**
     * Dispatch asearch event when user press enter
     *
     * @param {*} e
     */
    onEnter(e: any): void{
        e.preventDefault();
        this.store.dispatch(search({nameStartsWith: this.searchInput.value}));
    }

}
