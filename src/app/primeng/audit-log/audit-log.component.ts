import { Component, OnInit } from '@angular/core';

import { AuditLogService } from '../../common/services/audit-log.service';
import { AuditLogModel } from '../../common/model/audit-log.model';
import { PaginatorModel } from '../../common/model/paginator.model';
import { AuditLogRequestModel } from '../../common/model/audit-log-request.model';

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.scss'],
  styles: [`
        /* Column Priorities */
        @media only all {
            th.ui-p-6,
            td.ui-p-6,
            th.ui-p-5,
            td.ui-p-5,
            th.ui-p-4,
            td.ui-p-4,
            th.ui-p-3,
            td.ui-p-3,
            th.ui-p-2,
            td.ui-p-2,
            th.ui-p-1,
            td.ui-p-1 {
                display: none;
            }
        }

        /* Show priority 1 at 320px (20em x 16px) */
        @media screen and (min-width: 20em) {
            th.ui-p-1,
            td.ui-p-1 {
                display: table-cell;
            }
        }

        /* Show priority 2 at 480px (30em x 16px) */
        @media screen and (min-width: 30em) {
            th.ui-p-2,
            td.ui-p-2 {
                display: table-cell;
            }
        }

        /* Show priority 3 at 640px (40em x 16px) */
        @media screen and (min-width: 40em) {
            th.ui-p-3,
            td.ui-p-3 {
                display: table-cell;
            }
        }

        /* Show priority 4 at 800px (50em x 16px) */
        @media screen and (min-width: 50em) {
            th.ui-p-4,
            td.ui-p-4 {
                display: table-cell;
            }
        }

        /* Show priority 5 at 960px (60em x 16px) */
        @media screen and (min-width: 60em) {
            th.ui-p-5,
            td.ui-p-5 {
                display: table-cell;
            }
        }

        /* Show priority 6 at 1,120px (70em x 16px) */
        @media screen and (min-width: 70em) {
            th.ui-p-6,
            td.ui-p-6 {
                display: table-cell;
            }
        }
    `]
})
export class AuditLogComponent implements OnInit {
  rowsData: AuditLogModel[] = [];
  public currentPage = 1;
  private rowsPerPage = 4;
  private visiblePages = 5;
  public cols: Array<any> = [];

  constructor(private auditLogService: AuditLogService) { }

  ngOnInit(): void {
    this.initializePrimengTable();
    this.getAuditLogs();
  }

  private initializePrimengTable(): void {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'date', header: 'Date' },
      { field: 'action', header: 'Action' },
      { field: 'username', header: 'User name' },
      { field: 'comment', header: 'Comment' },
      { field: 'link', header: 'Link' }
    ];
  }

  private getAuditLogs(): void {
    this.auditLogService.getAsynch(this.constructAuditLogRequestModel()).subscribe({
      next: (auditLogs: AuditLogModel[]) => this.handleAuditLogs(auditLogs),
      error: (error) => this.handleException(error)
    });
  }

  private constructAuditLogRequestModel(): AuditLogRequestModel {
    return new AuditLogRequestModel(this.currentPage, this.rowsPerPage);
  }

  private handleException(error: any): void {
    console.log('exception ' + error);
  }

  private handleAuditLogs(auditLogs: AuditLogModel[]): void {
    this.rowsData = auditLogs;
  }

  previous(): void {
    this.currentPage -= 1;
    this.getAuditLogs();
  }

  next(): void {
    this.currentPage += 1;
    this.getAuditLogs();
  }
}
