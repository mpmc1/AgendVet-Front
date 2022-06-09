import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REST_HOST } from 'src/environments/environment.prod';
import { VeterinaryModel } from '../models/veterinary.model';
const HOST = REST_HOST;

@Injectable({
  providedIn: 'root'
})
export class VeterinaryService {

  constructor(private http:HttpClient) { }

  getVeterinary(): Observable<VeterinaryModel[]>{
    return this.http.get<VeterinaryModel[]>(`${HOST}api/v1/veterinary`);
  }
}
