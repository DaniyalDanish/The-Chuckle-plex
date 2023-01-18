import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from "@angular/material/grid-list";
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {DisplayComponent} from './home/display/display.component';
import {MovieOverviewComponent} from './movie-overview/movie-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayComponent,
    MovieOverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    SharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
