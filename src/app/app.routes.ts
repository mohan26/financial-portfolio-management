import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvestmentFormComponent } from './investment-form/investment-form.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'form', component: InvestmentFormComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  ];
