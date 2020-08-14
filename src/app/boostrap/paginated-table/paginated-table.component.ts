import { Component, OnInit } from '@angular/core';

import {AuditLogModel} from '../../common/model/audit-log.model';
import {AuditLogService} from '../../common/services/audit-log.service';
import {PaginatorModel} from '../common/paginator/model/paginator.model';

@Component({
  selector: 'app-paginated-table',
  templateUrl: './paginated-table.component.html',
  styleUrls: ['./paginated-table.component.scss']
})
export class PaginatedTableComponent implements OnInit {
  auditLogSet: AuditLogModel[];
  auditLogSetToDisplay: AuditLogModel[];
  paginatorModel: PaginatorModel;
  private rowsPerPage = 4;
  private visiblePages = 5;
  private currentPage = 1;

  constructor(private auditLogService: AuditLogService) { }

  ngOnInit(): void {
    this.resetCurrentPage();
    this.auditLogSet = this.auditLogService.get(33);
    this.calculatePaginatorModel();
    this.calculateDisplaySet();
  }

  private resetCurrentPage(): void {
    this.currentPage = 1;
  }

  private calculatePaginatorModel(): void {
    this.paginatorModel = new PaginatorModel( this.auditLogSet.length, this.rowsPerPage, this.visiblePages);
  }

  reduce(size: number): void {
    this.resetCurrentPage();
    this.auditLogSet = this.auditLogService.get(size);
    this.calculatePaginatorModel();
    this.calculateDisplaySet();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.calculateDisplaySet();
  }

  calculateDisplaySet(): void {
    const start = (this.currentPage - 1) * this.paginatorModel.rowsPerPage;
    let end = start + this.paginatorModel.rowsPerPage;
    end = Math.min(end, this.auditLogSet.length);

    this.auditLogSetToDisplay = this.auditLogSet.slice(start, end);
  }
}
