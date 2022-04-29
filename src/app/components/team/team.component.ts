import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketballService } from 'src/app/basketball.service';
import { Coach } from 'src/app/model/Coach';
import { Player } from 'src/app/model/Player';
import { Team } from 'src/app/model/Team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
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
