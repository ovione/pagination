import { Component } from '@angular/core';

@Component({
  selector: 'app-audit-log-usage',
  templateUrl: './audit-log-usage.component.html',
  styleUrls: ['./audit-log-usage.component.scss']
})
export class AuditLogUsageComponent {
  rowsPerPage = 4;

  modifyRowsPerPage(rowsPerPage: number): void {
    this.rowsPerPage = rowsPerPage;
  }
}
