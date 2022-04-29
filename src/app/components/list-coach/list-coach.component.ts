import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketballService } from 'src/app/basketball.service';
import { Coach } from 'src/app/model/Coach';

@Component({
  selector: 'app-list-coach',
  templateUrl: './list-coach.component.html',
  styleUrls: ['./list-coach.component.css']
})
export class ListCoachComponent implements OnInit {

  coaches:Coach[]=[]

  constructor(private service:BasketballService,private router:Router) { }

  ngOnInit(): void {
    this.service.getAllCoaches().subscribe({
      next:(data)=>{
        this.coaches=data
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  delete(id:Number){
    this.service.deleteCoach(id).subscribe()
    window.location.href='/coaches'
  }

}
