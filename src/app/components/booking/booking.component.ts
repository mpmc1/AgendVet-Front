import { Component, OnInit } from '@angular/core';
import { VeterinaryModel } from 'src/app/models/veterinary.model';
import { VeterinaryService } from 'src/app/services/veterinary.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  veterinarios: VeterinaryModel[]=[];
  ownerName: string = "";
  idNumber: string = "";
  petName: string = "";
  petSpecie: string = "";
  symptoms: string = "";
  date: string = "";
  veterinary: string = "";
  hour: string = "";



  constructor(private vetService:VeterinaryService) { }

  ngOnInit(): void {
    this.vetService.getVeterinary().subscribe(response =>{
      this.veterinarios = response.data;
    },error =>{
      console.error(error);
    });
  }

  createBooking(){

    

  }



}
