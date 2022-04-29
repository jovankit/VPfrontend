import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './model/Player';
import { Observable } from 'rxjs';
import { Team } from './model/Team';
import { Coach } from './model/Coach';

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
}
