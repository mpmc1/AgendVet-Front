import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { CancelComponent } from './components/cancel/cancel.component';
import { UpdateComponent } from './components/update/update.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  {path: "", redirectTo: "/welcome", pathMatch: "full"},
  {path: "welcome", component: WelcomePageComponent},
  {path: "booking", component: BookingComponent},
  {path: "cancel", component: CancelComponent},
  {path: "update", component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
