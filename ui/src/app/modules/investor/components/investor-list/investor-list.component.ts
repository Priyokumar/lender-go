import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogComponent } from 'src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component';
import { SnackbarInfoComponent } from 'src/app/modules/shared/components/snackbar-info/snackbar-info.component';
import { IConfirmation, SnackBarConfig } from 'src/app/modules/shared/model/shared.model';
import { LoaderService } from 'src/app/modules/shared/services/loader.service';
import { IInvestor } from '../../investor.model';
import { InvestorService } from '../../services/investor.service';

@Component({
  selector: 'app-investor-list',
  templateUrl: './investor-list.component.html',
  styleUrls: ['./investor-list.component.scss']
})
export class InvestorListComponent implements OnInit {

  public errorMessage: string;
  public columns: string[] = ['investorId', 'name', 'email', 'mobileNo', 'gender', 'occupation', 'address', 'status', 'action'];
  public dataSource: MatTableDataSource<IInvestor>;

  constructor(
    private investorService: InvestorService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    public loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.getAllInvestors();
  }

  getAllInvestors() {
    this.loaderService.loading(true);
    this.investorService.getAllInvestors().subscribe(data => {
      this.loaderService.loading(false);
      this.dataSource = new MatTableDataSource(data);
    }, error => {
      this.loaderService.loading(false);
      console.log(error);
    })
  }

  delete(id: number) {

    const confirmationData: IConfirmation = {
      title: 'Delete role',
      subtitle: 'Are you really sure to delete this record?'
    };

    this.dialog.open(ConfirmationDialogComponent, { width: '26%', data: confirmationData, disableClose: true })
      .afterClosed().subscribe(okData => {
        if (okData) {
          this.investorService.deleteInvestor(id).subscribe(data => {
            if (data.apiMessage && data.apiMessage.error) {
              this.snackBar.openFromComponent(
                SnackbarInfoComponent,
                {
                  data: SnackBarConfig.dangerData("Something went wrong."),
                  ...SnackBarConfig.flashTopDangerSnackBar()
                });
              return;
            } else {
              this.snackBar.openFromComponent(
                SnackbarInfoComponent,
                {
                  data: SnackBarConfig.successData("Investor has been deleted."),
                  ...SnackBarConfig.flashTopSuccessSnackBar()
                });
            }
            this.getAllInvestors();
          }, err => {
            console.error(err);
            this.snackBar.openFromComponent(
              SnackbarInfoComponent,
              {
                data: SnackBarConfig.dangerData("Something went wrong."),
                ...SnackBarConfig.flashTopDangerSnackBar()
              });
          });
        }
      });
  }

}
