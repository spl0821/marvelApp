import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { ComponentsModule } from './components/components.module';
import { StoreModule } from '@ngrx/store';
import { searcherReducer } from './reducers/searcher.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    StoreModule.forRoot({search: searcherReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
