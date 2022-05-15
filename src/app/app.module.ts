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
import { ListTeamsComponent } from './components/list-teams/list-teams.component';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { TeamComponent } from './components/team/team.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ListGamesComponent } from './components/list-games/list-games.component';
import { GamesFormComponent } from './components/games-form/games-form.component';
import { GameComponent } from './components/game/game.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPlayersComponent,
    PlayerFormComponent,
    ListCoachComponent,
    CoachFormComponent,
    ListTeamsComponent,
    TeamFormComponent,
    TeamComponent,
    NavBarComponent,
    ListGamesComponent,
    GamesFormComponent,
    GameComponent,
    FooterComponent
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
