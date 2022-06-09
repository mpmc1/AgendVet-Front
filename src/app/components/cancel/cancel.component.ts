import { Component, OnInit } from '@angular/core';
import { VeterinaryModel } from 'src/app/models/veterinary.model';
import { VeterinaryService } from 'src/app/services/veterinary.service';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss']
})
export class CancelComponent implements OnInit {

  veterinarios: VeterinaryModel[]=[];

  constructor(private vetService:VeterinaryService) { }

  ngOnInit(): void {
    this.vetService.getVeterinary().subscribe(response =>{
      this.veterinarios = response.data;
    },error =>{
      console.error(error);
    });
  }

}
