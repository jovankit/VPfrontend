import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketballService } from 'src/app/basketball.service';
import { Game } from 'src/app/model/Game';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {

  games:Game[]=[]

  constructor(private service:BasketballService,private router:Router) { }

  ngOnInit(): void {
    this.service.getAllGames().subscribe({
      next:(data)=>{
        this.games=data
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  delete(id:Number){
    this.service.deleteGame(id).subscribe()
    window.location.href='/games'
  }

}
