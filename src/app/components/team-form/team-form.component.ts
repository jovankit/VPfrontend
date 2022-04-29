import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketballService } from 'src/app/basketball.service';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit {

  id:Number|undefined
  isAddMode:boolean=true
  createTeam = new FormGroup({
    name: new FormControl(null,Validators.required),
    address: new FormControl(null,Validators.required),
    sponsor: new FormControl(null,Validators.required),
    homeField: new FormControl(null,Validators.required)
  })

  constructor(private service:BasketballService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    if(!this.isAddMode){
      this.service.getTeam(this.id).subscribe({
        next:(data)=>{
          this.createTeam.controls['name'].setValue(data.name)
          this.createTeam.controls['address'].setValue(data.address)
          this.createTeam.controls['sponsor'].setValue(data.sponsor)
          this.createTeam.controls['homeField'].setValue(data.homeField)
        },
        error:(error)=>{
          console.log(error)
        }
      })
      
    }
  }
  submit(){
    if(this.isAddMode){
      this.service.saveTeam(
          this.createTeam.controls['name'].value,
          this.createTeam.controls['address'].value,
          this.createTeam.controls['sponsor'].value,
          this.createTeam.controls['homeField'].value
      ).subscribe()
    }else{
      this.service.editTeam(
        this.id!,
        this.createTeam.controls['name'].value,
          this.createTeam.controls['address'].value,
          this.createTeam.controls['sponsor'].value,
          this.createTeam.controls['homeField'].value
      ).subscribe()

    }
    this.router.navigate(['/teams'])
  }

}
