import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  
  getPortfolioData() {
    return of({
      assetAllocation: { tech: 50, finance: 30, health: 20 },
      performance: [65, 59, 80, 81, 56, 55]
    });
  }

}