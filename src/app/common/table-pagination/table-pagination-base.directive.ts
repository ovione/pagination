import { LazyLoadEvent } from 'primeng';
import { Directive, Input } from '@angular/core';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class TablePaginationBase {
  @Input() public rowsPerPage = 4;
  @Input() public rowsPerPageOptions = ['4', '8', '20'];

  cols: Array<any> = [];
  totalRecords: number;
  loading: boolean;
  rowsData: Array<any> = [];

  abstract getRowsData(event: LazyLoadEvent): void;

}
