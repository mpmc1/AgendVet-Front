import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REST_HOST } from 'src/environments/environment.prod';
import { EndpointBookingResponse } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  getBooking(): Observable<EndpointBookingResponse>{
    return this.http.get<EndpointBookingResponse>(`http://localhost:8080/api/v1/booking`);
  }
}
