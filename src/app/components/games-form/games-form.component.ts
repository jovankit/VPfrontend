import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketballService } from 'src/app/basketball.service';
import { Delegation } from 'src/app/model/Delegation';
import { Player } from 'src/app/model/Player';
import { Referee } from 'src/app/model/Referee';
import { Team } from 'src/app/model/Team';

@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.css']
})
export class GamesFormComponent implements OnInit {

  id:Number|undefined
  isAddMode:boolean=true
  referees:Referee[]=[]
  delegation:Delegation[]=[]
  teams:Team[]=[]
  players:Player[]=[]
  createGame = new FormGroup({
    dateOfMaintenance: new FormControl(null,Validators.required),
    result: new FormControl(null,Validators.required),
    referees: new FormControl(null,Validators.required),
    delegation: new FormControl(null,Validators.required),
    homeTeam: new FormControl(null,Validators.required),
    awayTeam: new FormControl(null,Validators.required),
    players: new FormControl(null,Validators.required)
  })

  constructor(private service:BasketballService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    if(!this.isAddMode){
      this.service.getGame(this.id).subscribe({
        next:(data)=>{
          this.createGame.controls['dateOfMaintenance'].setValue(data.dateOfMaintenance)
          this.createGame.controls['result'].setValue(data.result)
          this.createGame.controls['referees'].setValue(data.referees)
          this.createGame.controls['delegation'].setValue(data.delegation)
          this.createGame.controls['homeTeam'].setValue(data.homeTeam)
          this.createGame.controls['awayTeam'].setValue(data.awayTeam)
          this.createGame.controls['players'].setValue(data.players)
        },
        error:(error)=>{
          console.log(error)
        }
      })
      
    }

    this.service.getAllReferee().subscribe({
      next:(data)=>{
        this.referees=data
      },
      error:(error)=>{
        console.log(error)
      }
    })
    this.service.getAllDelegation().subscribe({
      next:(data)=>{
        this.delegation=data
      },
      error:(error)=>{
        console.log(error)
      }
    })
    this.service.getAllTeams().subscribe({
      next:(data)=>{
        this.teams=data
      },
      error:(error)=>{
        console.log(error)
      }
    })
    this.service.getAllPlayers().subscribe({
      next:(data)=>{
        this.players=data
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
  submit(){
    console.log(this.createGame.controls['players'].value )
    if(this.isAddMode){
      this.service.saveGame(
        this.createGame.controls['result'].value,
        this.createGame.controls['dateOfMaintenance'].value,
        this.createGame.controls['referees'].value,
        this.createGame.controls['delegation'].value,
        this.createGame.controls['homeTeam'].value,
        this.createGame.controls['awayTeam'].value,
        this.createGame.controls['players'].value
      ).subscribe()
    }else{
      this.service.editGame(
        this.id!,
        this.createGame.controls['result'].value,
        this.createGame.controls['dateOfMaintenance'].value,
        this.createGame.controls['referees'].value,
        this.createGame.controls['delegation'].value,
        this.createGame.controls['homeTeam'].value,
        this.createGame.controls['awayTeam'].value,
        this.createGame.controls['players'].value
      ).subscribe()

    }
    this.router.navigate(['/games'])
  }

}
