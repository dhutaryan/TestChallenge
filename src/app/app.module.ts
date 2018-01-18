import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { GenderPipe } from './heroes/hero/gender.pipe';
import { SpinnerService } from './shared/spinner/spinner.service';
import { HeroesService } from './heroes/heroes.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent,
    SpinnerComponent,
    GenderPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    SpinnerService,
    HeroesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
