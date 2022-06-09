import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REST_HOST } from 'src/environments/environment.prod';
import { EndpointVeterinryResponse } from '../models/veterinary.model';

@Injectable({
  providedIn: 'root'
})
export class VeterinaryService {

  constructor(private http:HttpClient) { }

  getVeterinary(): Observable<EndpointVeterinryResponse>{
    return this.http.get<EndpointVeterinryResponse>(`http://localhost:8080/api/v1/veterinary`);
  }
}
