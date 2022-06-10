import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndpointVeterinryResponse } from '../models/veterinary.model';

@Injectable({
  providedIn: 'root'
})
export class VeterinaryService {

  constructor(private http:HttpClient) { }

  getVeterinary(): Observable<any>{
    return this.http.get<any>(`/api/v1/veterinary`);
  }
}
