import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './people/person/person.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { GenderPipe } from './people/person/gender.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonComponent,
    SpinnerComponent,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
