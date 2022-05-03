import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachFormComponent } from './components/coach-form/coach-form.component';
import { GameComponent } from './components/game/game.component';
import { GamesFormComponent } from './components/games-form/games-form.component';
import { ListCoachComponent } from './components/list-coach/list-coach.component';
import { ListGamesComponent } from './components/list-games/list-games.component';
import { ListPlayersComponent } from './components/list-players/list-players.component';
import { ListTeamsComponent } from './components/list-teams/list-teams.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  { path: 'games/get/:id', component: GameComponent},
  { path: 'games/add/:id', component: GamesFormComponent},
  { path: 'games/add', component: GamesFormComponent},
  { path: 'games', component: ListGamesComponent},
  { path: 'teams/get/:id', component: TeamComponent},
  { path: 'teams/add/:id', component: TeamFormComponent},
  { path: 'teams/add', component: TeamFormComponent},
  { path: 'teams', component: ListTeamsComponent},
  { path: 'coaches/add/:id', component: CoachFormComponent},
  { path: 'coaches/add', component: CoachFormComponent},
  { path: 'coaches', component: ListCoachComponent},
  { path: 'players/add/:id', component: PlayerFormComponent},
  { path: 'players/add', component: PlayerFormComponent},
  { path: 'players', component: ListPlayersComponent},
  { path: '**', redirectTo: 'players', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
