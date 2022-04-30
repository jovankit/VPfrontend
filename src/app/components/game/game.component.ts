import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketballService } from 'src/app/basketball.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  id:Number|undefined
  team:Team|undefined
  players:Player[]=[]
  coaches:Coach[]=[]
  constructor(private service:BasketballService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.service.getTeam(this.id).subscribe({
      next:(data)=>{
        this.team=data
      },
      error:(error)=>{
        console.log(error)
      }
    })
    this.service.getAllPlayers().subscribe({
      next:(data)=>{
        this.players=data.filter(a=>a.team.id==this.id)
      },
      error:(error)=>{
        console.log(error)
      }
    })
    this.service.getAllCoaches().subscribe({
      next:(data)=>{
        this.coaches=data.filter(a=>a.team.id==this.id)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

}
