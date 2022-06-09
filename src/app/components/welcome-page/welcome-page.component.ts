import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  showingCitas: boolean = false
  citas: any[] = [{name:"Carlos", date:"28-08-2022", hour:"10:00 a.m."},
  {name:"Manuel", date:"28-08-2022", hour:"10:00 a.m."},
  {name:"Puerta", date:"28-08-2022", hour:"10:00 a.m."},
  {nonamembre:"Marin", date:"28-08-2022", hour:"10:00 a.m."}]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  findCitas(){
    this.showingCitas = true;
  }

}
