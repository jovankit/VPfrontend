import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachFormComponent } from './components/coach-form/coach-form.component';
import { ListCoachComponent } from './components/list-coach/list-coach.component';
import { ListPlayersComponent } from './components/list-players/list-players.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';

const routes: Routes = [
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
