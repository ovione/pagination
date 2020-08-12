import {Component, Input} from '@angular/core';

import { PaginatorModel } from './model/paginator.model';

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

  private calculatePageCount(): void {
    this.totalNumberOfPages = Math.ceil(this.paginatorModel.totalRecords / this.paginatorModel.rows) || 1;
  }

  goToRow(row: number): void {
    this.currentRow = row;
  }

  goToFirst(): void {
    this.currentRow = 1;
  }

  goToPrevious(): void {
    this.currentRow -= 1;
  }

  goToNext(): void {
    this.currentRow += 1;
  }

  goToLast(): void {
    this.currentRow = this.totalNumberOfPages;
  }

  isFirstPage(): boolean {
    return this.currentRow === 1;
  }

  isLastPage(): boolean {
    return this.currentRow === this.totalNumberOfPages;
  }

  updatePageLinks(): void {
    this.pageLinks = [];

    // for(let i = start; i <= end; i++) {
    //   this.pageLinks.push(i + 1);
    // }
  }
}

