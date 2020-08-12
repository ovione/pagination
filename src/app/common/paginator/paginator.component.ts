import {Component, Input} from '@angular/core';

import { PaginatorModel } from "./model/paginator.model";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  _paginatorModel: PaginatorModel;
  totalNumberOfPages = 1;
  currentRow = 1;
  pageLinks: number[];

  @Input() set paginatorModel(paginatorModel: PaginatorModel) {
    this._paginatorModel = paginatorModel;
    this.calculatePageCount();

  }
  get paginatorModel(): PaginatorModel {
    return this._paginatorModel;
  }

  private calculatePageCount() {
    this.totalNumberOfPages = Math.ceil(this.paginatorModel.totalRecords/this.paginatorModel.rows) || 1;
  }

  goToRow(row: number) {
    this.currentRow = row;
  }

  goToFirst() {
    this.currentRow = 1;
  }

  goToPrevious() {
    this.currentRow -= 1;
  }

  goToNext() {
    this.currentRow += 1;
  }

  goToLast() {
    this.currentRow = this.totalNumberOfPages;
  }

  isFirstPage() {
    return this.currentRow === 1;
  }

  isLastPage() {
    return this.currentRow === this.totalNumberOfPages;
  }

  updatePageLinks() {
    this.pageLinks = [];

    // for(let i = start; i <= end; i++) {
    //   this.pageLinks.push(i + 1);
    // }
  }
}

