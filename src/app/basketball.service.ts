import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './model/Player';
import { Observable } from 'rxjs';
import { Team } from './model/Team';
import { Coach } from './model/Coach';
import { Game } from './model/Game';
import { Referee } from './model/Referee';
import { Delegation } from './model/Delegation';

@Injectable({
  providedIn: 'root'
})
export class BasketballService {

  constructor(private http: HttpClient) { }

  getAllPlayers():Observable<Player[]>{
    return this.http.get<Player[]>("http://localhost:9080/api/players");
  }

  getPlayer(id:Number):Observable<Player>{
    return this.http.get<Player>(`http://localhost:9080/api/players/${id}`);
  }

  deletePlayer(id:Number):Observable<Player>{
    return this.http.delete<Player>(`http://localhost:9080/api/players/delete/${id}`);
  }

  savePlayer(
    name:String,
    jerseyNumber:Number,
    position:String,
    teamId:Number
  ):Observable<Player>{
    return this.http.post<Player>("http://localhost:9080/api/players/add",{
      "name":name,
      "jerseyNumber":jerseyNumber,
      "position":position,
      "teamId":teamId
    });
  }

  editPlayer(
    id:Number,
    name:String,
    jerseyNumber:Number,
    position:String,
    teamId:Number
  ):Observable<Player>{
    return this.http.put<Player>(`http://localhost:9080/api/players/edit/${id}`,{
      "name":name,
      "jerseyNumber":jerseyNumber,
      "position":position,
      "teamId":teamId
    });
  }

  getAllCoaches():Observable<Coach[]>{
    return this.http.get<Coach[]>("http://localhost:9080/api/coaches");
  }

  getCoach(id:Number):Observable<Coach>{
    return this.http.get<Coach>(`http://localhost:9080/api/coaches/${id}`);
  }

  deleteCoach(id:Number):Observable<Coach>{
    return this.http.delete<Coach>(`http://localhost:9080/api/coaches/delete/${id}`);
  }

  getAllCoachTypes():Observable<String[]>{
    return this.http.get<String[]>("http://localhost:9080/api/coaches/types");
  }

  saveCoach(
    name:String,
    coachType:String,
    teamId:Number
  ):Observable<Player>{
    return this.http.post<Player>("http://localhost:9080/api/coaches/add",{
      "name":name,
      "coachType":coachType,
      "teamId":teamId
    });
  }

  editCoach(
    id:Number,
    name:String,
    coachType:String,
    teamId:Number
  ):Observable<Player>{
    return this.http.put<Player>(`http://localhost:9080/api/coaches/edit/${id}`,{
      "name":name,
      "coachType":coachType,
      "teamId":teamId
    });
  }

  getAllTeams():Observable<Team[]>{
    return this.http.get<Team[]>("http://localhost:9080/api/teams");
  }

  getTeam(id:Number):Observable<Team>{
    return this.http.get<Team>(`http://localhost:9080/api/teams/${id}`);
  }

  deleteTeam(id:Number):Observable<Team>{
    return this.http.delete<Team>(`http://localhost:9080/api/teams/delete/${id}`);
  }

  saveTeam(
    name:String,
    address:String,
    sponsor:String,
    homeField:String
  ):Observable<Team>{
    return this.http.post<Team>("http://localhost:9080/api/teams/add",{
      "name":name,
    "address":address,
    "sponsor":sponsor,
    "homeField":homeField
    });
  }

  editTeam(
    id:Number,
    name:String,
    address:String,
    sponsor:String,
    homeField:String
  ):Observable<Team>{
    return this.http.put<Team>(`http://localhost:9080/api/teams/edit/${id}`,{
      "name":name,
    "address":address,
    "sponsor":sponsor,
    "homeField":homeField
    });
  }

  pointsToTeam(id:Number,points:Number):Observable<Team>{
    return this.http.post<Team>(`http://localhost:9080/api/teams/increase/${id}`,{
      "points":points
    });
  }

  getAllGames():Observable<Game[]>{
    return this.http.get<Game[]>("http://localhost:9080/api/games");
  }

  getGame(id:Number):Observable<Game>{
    return this.http.get<Game>(`http://localhost:9080/api/games/${id}`);
  }

  deleteGame(id:Number):Observable<Game>{
    return this.http.delete<Game>(`http://localhost:9080/api/games/delete/${id}`);
  }

  saveGame(
    result:String,
    dateOfMaintenance:Date,
    refereesId:Number[],
    delegation:Number,
    homeTeam:Number,
    awayTeam:Number,
    players:Number[]
  ):Observable<Game>{
    console.log(dateOfMaintenance)
    return this.http.post<Game>("http://localhost:9080/api/games/add",{
      "result":result,
      "dateOfMaintenance":dateOfMaintenance,
      "refereesId":refereesId,
      "delegation":delegation,
      "homeTeam":homeTeam,
      "awayTeam":awayTeam,
      "players":players
    });
  }

  editGame(
    id:Number,
    result:String,
    dateOfMaintenance:Date,
    refereesId:Number[],
    delegation:Number,
    homeTeam:Number,
    awayTeam:Number,
    players:Number[]
  ):Observable<Game>{
    return this.http.put<Game>(`http://localhost:9080/api/games/edit/${id}`,{
      "result":result,
      "dateOfMaintenance":dateOfMaintenance,
      "refereesId":refereesId,
      "delegation":delegation,
      "homeTeam":homeTeam,
      "awayTeam":awayTeam,
      "players":players
    });
  }

  getAllReferee():Observable<Referee[]>{
    return this.http.get<Referee[]>("http://localhost:9080/api/referees");
  }
  
  getAllDelegation():Observable<Delegation[]>{
    return this.http.get<Delegation[]>("http://localhost:9080/api/delegation");
  }
}
