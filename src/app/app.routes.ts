import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CustomerComponent } from './components/customer/customer.component';

export const routes: Routes = [
    {
        path:"home",
        component:HomepageComponent
    },
    {
        path:"customer",
        component:CustomerComponent
    },
    {
        path:"",
        redirectTo:"/home",
        pathMatch:"full"
    }
];
