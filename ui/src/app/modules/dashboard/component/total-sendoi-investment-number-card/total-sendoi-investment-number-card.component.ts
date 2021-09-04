import { Component, OnInit } from '@angular/core';
import { ISendoiVsInterestCollection } from '../../dashboard.model';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: '[total-sendoi-investment-number-card]',
  templateUrl: './total-sendoi-investment-number-card.component.html',
  styleUrls: ['./total-sendoi-investment-number-card.component.scss']
})
export class TotalSendoiInvestmentNumberCardComponent implements OnInit {

  data: ISendoiVsInterestCollection = {
    totalInterest: 20000,
    totalPrincipal: 400000
  };

  constructor(private dashbaordService: DashboardService) { }

  ngOnInit() {
    this.getAllInvestment();
  }

  getAllInvestment(){
    this.dashbaordService.getRepaymentAgainstInvestment().subscribe(data=>{
      this.data = data;
    }, error=>{
      console.log(error);
      
    });
  }

}
