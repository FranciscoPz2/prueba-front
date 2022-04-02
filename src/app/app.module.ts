import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCompModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentlComponent } from './contentl/contentl.component';
import { ContentrComponent } from './contentr/contentr.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentlComponent,
    ContentrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialCompModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
