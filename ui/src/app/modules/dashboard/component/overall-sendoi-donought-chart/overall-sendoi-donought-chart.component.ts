import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ISendoiVsInterestCollection } from '../../dashboard.model';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: '[overall-sendoi-donought-chart]',
  templateUrl: './overall-sendoi-donought-chart.component.html',
  styleUrls: ['./overall-sendoi-donought-chart.component.scss']
})
export class OverallSendoiDonoughtChartComponent implements OnInit {

  data: ISendoiVsInterestCollection;
  chart: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getSendoiDoghnutChartData();
  }

  getSendoiDoghnutChartData() {
    this.dashboardService.getRepaymentAgainstInvestment().subscribe(data=>{
      this.data = data;
      this.drawChart();
    }, error=>{
      console.log(error);
      
    })
  }

  drawChart() {
    if(this.chart){
      this.chart.destroy();
    }
    this.chart = new Chart(document.getElementById("overall-sendoi-chart"), {
      type: 'doughnut',
      data: {
        labels: ["Tatol investment", "Interest collection"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#F76B1C", "#06D8A4"],
            data: [this.data.totalPrincipal, this.data.totalInterest]
          }
        ]
      },
      options: {
        legend: {
          position: "bottom"
        },
        title: {
          display: false,
          text: 'Sendoi Against Interest collection'
        }
      }
    });
  }

}
