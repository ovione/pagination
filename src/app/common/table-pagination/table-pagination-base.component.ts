import { LazyLoadEvent } from 'primeng';

export abstract class TablePaginationBaseComponent {
  cols: Array<any> = [];
  totalRecords: number;
  loading: boolean;
  rowsData: Array<any> = [];

  abstract getRowsData(event: LazyLoadEvent): void;

}
