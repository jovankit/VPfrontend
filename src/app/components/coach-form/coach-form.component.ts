import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketballService } from 'src/app/basketball.service';
import { Team } from 'src/app/model/Team';

@Component({
  selector: 'app-coach-form',
  templateUrl: './coach-form.component.html',
  styleUrls: ['./coach-form.component.css']
})
export class CoachFormComponent implements OnInit {
  id:Number|undefined
  teams:Team[]=[]
  types:String[]=[]
  isAddMode:boolean=true
  createCoach = new FormGroup({
    name: new FormControl(null,Validators.required),
    coachType: new FormControl(null,Validators.required),
    teamId: new FormControl(null,Validators.required)
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
    this.service.getAllCoachTypes().subscribe({
      next:(data)=>{
        this.types=data
      },
      error:(error)=>{
        console.log(error)
      }
    })
    if(!this.isAddMode){
      this.service.getCoach(this.id).subscribe({
        next:(data)=>{
          this.createCoach.controls['name'].setValue(data.name)
          this.createCoach.controls['coachType'].setValue(data.coachType)
          this.createCoach.controls['teamId'].setValue(data.team)
        },
        error:(error)=>{
          console.log(error)
        }
      })
      
    }
  }
  submit(){
    if(this.isAddMode){
      this.service.saveCoach(
          this.createCoach.controls['name'].value,
          this.createCoach.controls['coachType'].value,
          this.createCoach.controls['teamId'].value
      ).subscribe()
    }else{
      this.service.editCoach(
        this.id!,
        this.createCoach.controls['name'].value,
          this.createCoach.controls['coachType'].value,
          this.createCoach.controls['teamId'].value
      ).subscribe()

    }
    this.router.navigate(['/coaches'])
  }

}
