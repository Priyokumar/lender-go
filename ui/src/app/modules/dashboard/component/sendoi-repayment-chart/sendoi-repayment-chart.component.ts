import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";
import { IRepaymentByMonthChart } from "../../dashboard.model";
import { DashboardService } from "../../service/dashboard.service";

@Component({
  selector: "[sendoi-repayment-chart]",
  templateUrl: "./sendoi-repayment-chart.component.html",
  styleUrls: ["./sendoi-repayment-chart.component.scss"],
})
export class SendoiRepaymentChartComponent implements OnInit {
  data: IRepaymentByMonthChart = {
    labels: ["JAN", "FEB", "MAR"],
    values: [86, 114, 106],
  };
  chart: any;

  constructor(private dashbaordService: DashboardService) {}

  ngOnInit() {
    this.getRepaymentChart();
  }

  getRepaymentChart() {
    this.dashbaordService.findMonthWiseRepayments().subscribe(
      (data) => {
        this.data = data;
        this.drawChart();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  drawChart() {
    if (this.chart) this.chart.destroy();
    this.chart = new Chart(document.getElementById("sendoi-repayment-chart"), {
      type: "line",
      data: {
        labels: this.data.labels,
       
        datasets: [
          {
            data: this.data.values,
            label: "Repayment",
            borderColor: "#035c34d0",
            backgroundColor: "#08aeeada",
            fill: true,
            tension: .3,
            borderWidth: .3,
            pointRadius: 1.5,
          },
        ],
      },
      options: {
        title: {
          display: false,
          text: "World population per region (in millions)",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
          labels: {
              fontSize: 11, //point style's size is based on font style not boxed width.
              usePointStyle:true,
          }
      }
      },
    });
  }
}
