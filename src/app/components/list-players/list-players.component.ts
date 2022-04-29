import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketballService } from 'src/app/basketball.service';
import { Player } from 'src/app/model/Player';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {
  players:Player[]=[]

  constructor(private service:BasketballService,private router:Router) { }

  ngOnInit(): void {
    this.service.getAllPlayers().subscribe({
      next:(data)=>{
        this.players=data
        console.log(this.players)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  delete(id:Number){
    this.service.deletePlayer(id).subscribe()
    window.location.href='/players'
  }

}
