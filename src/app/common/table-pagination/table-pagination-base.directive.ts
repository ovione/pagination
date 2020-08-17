import { Directive, Input, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class TablePaginationBase<T> implements OnInit {
  @Input() public rowsPerPage = 4;
  @Input() public rowsPerPageOptions = ['4', '8', '20'];
  @Input() delay = 0;

  cols: Array<any> = [];
  totalRecords: number;
  loading: boolean;
  rowsData: Array<any> = [];

  constructor() {
    this.loading = true;
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.initializeHeaders();
  }

  getRowsData(event: LazyLoadEvent): void {
    this.loading = true;
    setTimeout(() => {
      this.getData(event);
    }, this.delay);
  }

  protected handleException(error: any): void {
    console.log('exception ' + error);
  }

  protected handleResponse(rowData: T[], totalRecords: number): void {
    this.loading = false;
    this.rowsData = rowData;
    this.totalRecords = totalRecords;
  }

  abstract initializeHeaders(): void;
  abstract getData(event: LazyLoadEvent): void;

}
