import { NgModule, provideZoneChangeDetection } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";

import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material/tabs";

import { InvestmentFormComponent } from "./investment-form/investment-form.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatDialogModule,
        MatDatepickerModule, 
        MatNativeDateModule,
        MatTabsModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule,
    ],
    providers: [provideHttpClient(), provideZoneChangeDetection({ eventCoalescing: true })],
    declarations: [
        AppComponent,
        InvestmentFormComponent,
        DashboardComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule{}