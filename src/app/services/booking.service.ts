<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REST_HOST } from 'src/environments/environment.prod';
import { EndpointBookingResponse } from '../models/booking.model';
>>>>>>> b0df8cd7ef81c4c72a54f6c4f9cc493da4c030ce

@Injectable({
  providedIn: 'root'
})
export class BookingService {

<<<<<<< HEAD
  constructor(private http: HttpClient) { }
  
  createBooking(){
    
  }

=======
  constructor(private http:HttpClient) { }

  getBooking(): Observable<EndpointBookingResponse>{
    return this.http.get<EndpointBookingResponse>(`http://localhost:8080/api/v1/booking`);
  }
>>>>>>> b0df8cd7ef81c4c72a54f6c4f9cc493da4c030ce
}
