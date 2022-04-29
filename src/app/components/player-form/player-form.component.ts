import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketballService } from 'src/app/basketball.service';
import { Player } from 'src/app/model/Player';
import { Team } from 'src/app/model/Team';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  id:Number|undefined
  teams:Team[]=[]
  isAddMode:boolean=true
  createPlayer = new FormGroup({
    name: new FormControl(null,Validators.required),
    jerseyNumber: new FormControl(null,Validators.required),
    position: new FormControl(null,Validators.required),
    team: new FormControl(null,Validators.required)
  })

  constructor(private service:BasketballService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.service.getAllTeams().subscribe({
      next:(data)=>{
        this.teams=data
      },
      error:(error)=>{
        console.log(error)
      }
    })
    if(!this.isAddMode){
      this.service.getPlayer(this.id).subscribe({
        next:(data)=>{
          this.createPlayer.controls['name'].setValue(data.name)
          this.createPlayer.controls['jerseyNumber'].setValue(data.jerseyNumber)
          this.createPlayer.controls['position'].setValue(data.position)
          this.createPlayer.controls['team'].setValue(data.team)
        },
        error:(error)=>{
          console.log(error)
        }
      })
      
    }
  }
  submit(){
    if(this.isAddMode){
      this.service.savePlayer(
        this.createPlayer.controls['name'].value,
        this.createPlayer.controls['jerseyNumber'].value,
        this.createPlayer.controls['position'].value,
        this.createPlayer.controls['team'].value,
      ).subscribe()
    }else{
      console.log("here")
      this.service.editPlayer(
        this.id!,
        this.createPlayer.controls['name'].value,
        this.createPlayer.controls['jerseyNumber'].value,
        this.createPlayer.controls['position'].value,
        this.createPlayer.controls['team'].value,
      ).subscribe()

    }
    this.router.navigate(['/players'])
  }

}
