import { Component, OnInit } from '@angular/core';
import { Alimentation } from 'src/app/alimentationclass/alimentation';
import { ProduitservService } from 'src/app/Service/produitserv.service';

@Component({
  selector: 'app-alimentation',
  templateUrl: './alimentation.component.html',
  styleUrls: ['./alimentation.component.css']
})
export class AlimentationComponent implements OnInit {

  Alim!:Alimentation[];
  constructor(private alimService:ProduitservService) { }

  ngOnInit(): void {
 this.alimService.getAlimentation().subscribe (data => this.Alim = data)
   
  }

}
