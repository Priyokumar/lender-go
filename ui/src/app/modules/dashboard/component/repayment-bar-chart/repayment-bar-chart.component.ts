import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";
import { DashboardService } from "../../service/dashboard.service";

interface DCount {
  labels: string[];
  values: string[];
}

@Component({
  selector: "[repayment-bar-chart]",
  templateUrl: "./repayment-bar-chart.component.html",
  styleUrls: ["./repayment-bar-chart.component.scss"],
})
export class RepaymentBarChartComponent implements OnInit {
  count: DCount;

  constructor(private dashbaordService: DashboardService) {}

  ngOnInit() {
    this.getRepaymentBarChartData();
  }

  getRepaymentBarChartData() {
    this.dashbaordService.getResourceCounts().subscribe(
      (data) => {
        this.count = data;
        this.drawChart();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  drawChart() {
    new Chart(document.getElementById("repayment-bar-chart"), {
      type: "bar",
      data: {
        labels: this.count.labels,
        datasets: [
          {
            backgroundColor: [
              "#06b1a8",
              "#06b1a8",
              "#06b1a8",
              "#06b1a8",
              "#06b1a8",
            ],
            data: this.count.values,
          },
        ],
      },
      options: {
        legend: { display: false },
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
      },
    });
  }
}
