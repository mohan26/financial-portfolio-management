import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-investment-form',
  templateUrl: './investment-form.component.html',
  styleUrls: ['./investment-form.component.scss']
})
export class InvestmentFormComponent {
  
  constructor(private fb: FormBuilder) { 
  }
  investmentForm: any
  
  ngOnInit(){
    this.investmentForm = this.fb.group({
      assetType: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      purchasePrice: ['', [Validators.required, Validators.min(0)]],
      purchaseDate: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.investmentForm.valid) {
      console.log(this.investmentForm.value);
      alert("Investment details submitted!");
    } else {
      alert("Please fill out the form correctly.");
    }
  }
}