import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketballService } from 'src/app/basketball.service';
import { Team } from 'src/app/model/Team';

@Component({
  selector: 'app-list-teams',
  templateUrl: './list-teams.component.html',
  styleUrls: ['./list-teams.component.css']
})
export class ListTeamsComponent implements OnInit {

  teams:Team[]=[]

  constructor(private service:BasketballService,private router:Router) { }

  ngOnInit(): void {
    this.service.getAllTeams().subscribe({
      next:(data)=>{
        this.teams=data
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  delete(id:Number){
    this.service.deleteTeam(id).subscribe()
    window.location.href='/teams'
  }

}
