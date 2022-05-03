import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketballService } from 'src/app/basketball.service';
import { Coach } from 'src/app/model/Coach';
import { Game } from 'src/app/model/Game';
import { Player } from 'src/app/model/Player';
import { Team } from 'src/app/model/Team';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  id:Number|undefined
  game:Game|undefined
  homePlayers:Player[]=[]
  awayPlayers:Player[]=[]
  homeCoaches:Coach[]=[]
  awayCoaches:Coach[]=[]

  constructor(private service:BasketballService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.service.getGame(this.id).subscribe({
      next:(data)=>{
        this.game=data
        this.homePlayers=data.players.filter(p=>p.team.id==data.homeTeam.id)
        this.awayPlayers=data.players.filter(p=>p.team.id==data.awayTeam.id)
        this.service.getAllCoaches().subscribe({
          next:(data)=>{
            this.homeCoaches=data.filter(c=>c.team.id==this.game?.homeTeam.id)
            this.awayCoaches=data.filter(c=>c.team.id==this.game?.awayTeam.id)
          },
          error:(error)=>{
            console.log(error)
          }
        })
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
click(){
  console.log(this.game)
  console.log(this.homePlayers)
}
}
