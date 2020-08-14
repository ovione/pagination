import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng';
import { CarService } from './carservice';
import { Car } from './car';
import { AuditLogModel } from '../../common/model/audit-log.model';
import { AuditLogService } from '../../common/services/audit-log.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  datasource: AuditLogModel[];

  cars: AuditLogModel[];

  totalRecords: number;

  cols: any[];

  loading: boolean;

  constructor(private auditLogService: AuditLogService) { }

  ngOnInit(): void {
    this.datasource = this.auditLogService.get();
    this.totalRecords = this.datasource.length;

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'date', header: 'Date' },
      { field: 'action', header: 'Action' },
      { field: 'username', header: 'User name' },
      { field: 'comment', header: 'Comment' },
      { field: 'link', header: 'Link' }
    ];

    this.loading = true;
  }

  loadCarsLazy(event: LazyLoadEvent): void {
    this.loading = true;

    setTimeout(() => {
      if (this.datasource) {
        this.cars = this.datasource.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 1000);
  }
}
