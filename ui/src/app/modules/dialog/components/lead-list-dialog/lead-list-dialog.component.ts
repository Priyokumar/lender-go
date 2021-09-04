import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { LeadStatus } from "src/app/constant";
import { ILead } from "src/app/modules/lead/lead.model";
import { LeadService } from "src/app/modules/lead/service/lead.service";

@Component({
  selector: "app-lead-dialog",
  templateUrl: "./lead-list-dialog.component.html",
  styleUrls: ["./lead-list-dialog.component.scss"],
})
export class LeadListDialogComponent implements OnInit {
  public errorMessage: string;
  public columns: string[] = [
    "leadId",
    "customer",
    "product",
    "interest",
    "amount",
    "status",
    "frequency"
  ];
  public dataSource: MatTableDataSource<ILead>;

  constructor(
    private leadService: LeadService,
    public dialogRef: MatDialogRef<LeadListDialogComponent>,
  ) {}

  ngOnInit() {
    this.getLeads();
  }

  getLeads() {
    this.leadService.getLeads({ status: LeadStatus.QUALIFIED }).subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  select(lead: ILead) {
    this.dialogRef.close(lead);
    /* this.accountSerevice.getAllAccounts({leadId:leadDetails.leadId}).subscribe(data=>{
      if(data.length > 0) {
        this.dialog.open(ConfirmationDialogComponent, {
          data: {
            title: "Account exists",
            subtitle:
              "This lead is already associated with other account.",
          },
        });
      } else this.dialogRef.close(leadDetails);
    }) */
  }

  close() {
    this.dialogRef.close();
  }
}
