import { Component, OnInit } from '@angular/core';
import { ISendoiVsInterestCollection } from '../../dashboard.model';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: '[total-interest-collection]',
  templateUrl: './total-interest-collection.component.html',
  styleUrls: ['./total-interest-collection.component.scss']
})
export class TotalInterestCollectionComponent implements OnInit {

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
