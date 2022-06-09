import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AgendVet';
  isExpanded = false;
  actions = [
    {icon: "home", name: "Inicio", route: "/welcome"},
    {icon: "edit_note", name: "Agendar cita", route: "/booking"},
    {icon: "edit", name: "Modificar cita", route: "/update"},
    {icon: "dangerous", name: "Cancelar cita", route: "/cancel"},
];
  constructor(){}

}
