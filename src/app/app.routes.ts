import { Routes } from '@angular/router';

import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FlightComponent } from './flight/flight.component';
import { HolidayComponent } from './holiday/holiday.component';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';

import { RentalComponent } from './rental/rental.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    // { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgot', component: ForgotPasswordComponent },

    // { path: 'navbar', component: NavbarComponent },
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'about/:id', component: AboutComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'Flight', component: FlightComponent },
    { path: 'Hotel', component: HotelComponent },
    { path: 'Holiday', component: HolidayComponent },
    {
        path:'rental', component:RentalComponent
    }
];
