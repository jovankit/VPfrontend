import { Team } from "./Team";

export interface Player{
    id:Number,
    name:String,
    jerseyNumber:Number,
    position:String,
    team:Team,
    ppg:Number,
    apg:Number,
    rpg:Number,
    mpg:Number,
    gamesPlayed:Number
}