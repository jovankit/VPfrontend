import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {

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
