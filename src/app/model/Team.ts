import { Coach } from "./Coach";
import { Player } from "./Player";

export interface Team{
    id:Number,
    name:String,
    address:String,
    sponsor:String,
    homeField:String,
    points:Number,
    players:Player[],
    coaches:Coach[]
}