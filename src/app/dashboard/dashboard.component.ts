import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
    this.loadPortfolioChart();
    this.loadMarketTrendsChart();
    this.loadAssetAllocationChart();
    this.loadPortfolioPerformanceChart();
  }

  loadPortfolioChart() {
    const ctx = document.getElementById('portfolioChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Portfolio Performance',
          data: [65, 59, 80, 81, 56, 55],
          borderColor: '#3e95cd',
          fill: false
        }]
      }
    });
  }

  loadMarketTrendsChart() {
    const ctx = document.getElementById('marketTrendsChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Tech', 'Finance', 'Health', 'Energy'],
        datasets: [{
          label: 'Market Trends',
          data: [40, 60, 80, 50],
          backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56']
        }]
      }
    });
  }

  loadAssetAllocationChart() {
    const ctx = document.getElementById('assetAllocationChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Tech', 'Finance', 'Health', 'Energy'],
        datasets: [{
          label: 'Asset Allocation',
          data: [40, 30, 20, 10],  // Sample data, can be dynamic
          backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56']
        }]
      }
    });
  }

  loadPortfolioPerformanceChart() {
    const ctx = document.getElementById('portfolioPerformanceChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],  // X-axis as months
        datasets: [{
          label: 'Portfolio Performance',
          data: [65, 70, 75, 80, 85, 90],  // Performance data (y-axis)
          borderColor: '#3e95cd',
          fill: false
        }]
      }
    });
  }

}
