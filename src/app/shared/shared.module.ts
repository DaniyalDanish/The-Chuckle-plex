import {CommonModule} from "@angular/common";
import {ModuleWithProviders, NgModule} from "@angular/core";
import {MoviesService} from "./services/movies.service";
import { HeaderComponent } from './ui/header/header.component';
import { SearchComponent } from './ui/header/search/search.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';


/**
 * Module for managing functionality needed by multiple modules.
 */
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [
    HeaderComponent,
    SearchComponent,
    PageNotFoundComponent
  ],
  providers: [
    MoviesService,
  ],
  exports: [
    HeaderComponent,
    SearchComponent
  ]
})
export class SharedModule {

  public static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule
    };
  }

}
