import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { GenderPipe } from './heroes/hero/gender.pipe';
import { HeroesService } from './heroes/heroes.service';
import { GenderClassPipe } from './heroes/hero/gender-class.pipe';
import { PaginationComponent } from './heroes/pagination/pagination.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent,
    SpinnerComponent,
    GenderPipe,
    GenderClassPipe,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    HeroesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
