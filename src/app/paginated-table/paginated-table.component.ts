import { Component, OnInit } from '@angular/core';

import {AuditLogModel} from '../audit-log/model/audit-log.model';
import {AuditLogService} from '../audit-log/services/audit-log.service';
import {PaginatorModel} from '../common/paginator/model/paginator.model';

@Component({
  selector: 'app-paginated-table',
  templateUrl: './paginated-table.component.html',
  styleUrls: ['./paginated-table.component.scss']
})
export class PaginatedTableComponent implements OnInit {
  auditLogSet: AuditLogModel[];
  paginatorModel: PaginatorModel;
  private rows = 4;
  private visiblePages = 5;

  constructor(private auditLogService: AuditLogService) { }

  ngOnInit(): void {
    this.auditLogSet = this.auditLogService.get(33);
    this.calculateLength();
  }

  private calculateLength(): void {
    this.paginatorModel = new PaginatorModel( this.auditLogSet.length, this.rows, this.visiblePages);
  }

  reduce(size: number): void {
    this.auditLogSet = this.auditLogService.get(size);
    this.calculateLength();
  }

  onPageChange(page: number): void {
    console.log(page);
  }
}
