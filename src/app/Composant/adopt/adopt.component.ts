import { AnimalsService } from './../../Service/animals.service';
import { Component, OnInit } from '@angular/core';
import { Animals } from 'src/app/AnimalsClass/animals';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {
  lesAnimaux!:Animals[];

  constructor(private animalsService:AnimalsService) { }
 filterdog!:any;
  ngOnInit(): void {
    this.animalsService.getAnimals().subscribe (data => this.lesAnimaux = data)
  }
  // onDog(){
    
  // }
  // oncat(type:any){
  //   this.filterdog=this.lesAnimaux.filter((a:any)=>{
  //     if(a.type == type){
  //       return a;
  //     }
  //   })
  // }
}
