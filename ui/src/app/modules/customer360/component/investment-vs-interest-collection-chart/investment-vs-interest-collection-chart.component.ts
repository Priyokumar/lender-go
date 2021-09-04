import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ICustomer } from 'src/app/modules/customer/customer.model';
import { ISendoiVsInterestCollection } from 'src/app/modules/dashboard/dashboard.model';
import Chart from 'chart.js';
import { DashboardService } from 'src/app/modules/dashboard/service/dashboard.service';

@Component({
  selector: '[investment-vs-interest-collection-chart]',
  templateUrl: './investment-vs-interest-collection-chart.component.html',
  styleUrls: ['./investment-vs-interest-collection-chart.component.scss']
})
export class InvestmentVsInterestCollectionChartComponent implements OnInit, OnChanges, OnDestroy {

  @Input() customer: ICustomer;
  data: ISendoiVsInterestCollection = {
    totalInterest: 0,
    totalPrincipal: 0
  };
  chart: any;

  constructor(private dashboardService: DashboardService) { }
 
  ngOnChanges(changes: SimpleChanges): void {
    if(this.customer){
      this.getSendoiDoghnutChartData();
    }
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if(this.chart) this.chart.destroy();
  }

  getSendoiDoghnutChartData() {
    this.dashboardService.getRepaymentAgainstInvestmentByCustomerId(this.customer.customerId).subscribe(data=>{
      this.data = data;
      this.drawChart();
    }, error=>{
      console.log(error);
      
    })
  }

  drawChart() {

    if(this.chart) this.chart.destroy();

    this.chart = new Chart(document.getElementById("overall-customer-investment-interest-collection-chart"), {
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
