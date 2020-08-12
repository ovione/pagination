import {Component, Input} from '@angular/core';

import { PaginatorModel } from "./model/paginator.model";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  _paginatorModel: PaginatorModel;
  numberOfRows = 1;
  current = 1;

  @Input() set paginatorModel(paginatorModel: PaginatorModel) {
    this._paginatorModel = paginatorModel;
    this.calculatePageCount();

  }
  get paginatorModel(): PaginatorModel {
    return this._paginatorModel;
  }

  private calculatePageCount() {
    this.numberOfRows = Math.ceil(this.paginatorModel.totalRecords/this.paginatorModel.rows) || 1;
  }
}

