import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UpdateComponent } from './components/update/update.component';
import { BookingComponent } from './components/booking/booking.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { CancelComponent } from './components/cancel/cancel.component';

@NgModule({
  declarations: [
    UpdateComponent,
    CancelComponent,
    AppComponent,
    BookingComponent,
    WelcomePageComponent
  ],
  imports: [
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
