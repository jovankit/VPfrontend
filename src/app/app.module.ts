import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPlayersComponent } from './components/list-players/list-players.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { ListCoachComponent } from './components/list-coach/list-coach.component';
import { CoachFormComponent } from './components/coach-form/coach-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPlayersComponent,
    PlayerFormComponent,
    ListCoachComponent,
    CoachFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
