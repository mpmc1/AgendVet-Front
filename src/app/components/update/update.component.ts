import { Component, OnInit } from '@angular/core';
import { VeterinaryModel } from 'src/app/models/veterinary.model';
import { VeterinaryService } from 'src/app/services/veterinary.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  veterinarios: VeterinaryModel[]=[];

  constructor(private vetService:VeterinaryService) { }

  ngOnInit(): void {
    this.vetService.getVeterinary().subscribe(response =>{
      this.veterinarios = response;
    },error =>{
      console.error(error);
    });
  }

}
