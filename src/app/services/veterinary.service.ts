import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REST_HOST } from 'src/environments/environment.prod';
import { VeterinaryModel } from '../models/veterinary.model';

@Injectable({
  providedIn: 'root'
})
export class VeterinaryService {

  constructor(private http:HttpClient) { }

  getVeterinary(): Observable<VeterinaryModel[]>{
    return this.http.get<VeterinaryModel[]>(`http://localhost:8080/api/v1/veterinary`);
  }
}
