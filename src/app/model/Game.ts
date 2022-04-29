import { Delegation } from "./Delegation";
import { Player } from "./Player";
import { Referee } from "./Referee";
import { Team } from "./Team";

export interface Game{
    id:Number,
    result:String,
    dateOfMaintenance:Date,
    referees:Referee[],
    delegation:Delegation,
    homeTeam:Team,
    awayTeam:Team,
    players:Player[]
}