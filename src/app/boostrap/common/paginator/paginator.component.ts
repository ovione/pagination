import {Component, EventEmitter, Input, Output} from '@angular/core';

import { PaginatorModel } from '../../model/paginator.model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  _paginatorModel: PaginatorModel;
  currentPage = 0;
  totalNumberOfPages = 0;
  pageWindowStart = 0;
  pageWindowEnd = 0;
  pageLinks: number[];
  @Output() onPageChange: EventEmitter<any> = new EventEmitter();

  @Input() set paginatorModel(paginatorModel: PaginatorModel) {
    this._paginatorModel = paginatorModel;
    this.initializePaginator();

  }
  get paginatorModel(): PaginatorModel {
    return this._paginatorModel;
  }

  private initializePaginator(): void {
    this.currentPage = 0;
    this.totalNumberOfPages = Math.ceil(this.paginatorModel.totalRecords / this.paginatorModel.rowsPerPage) || 1;
    this.paginatorModel.visiblePages = Math.min(this.totalNumberOfPages, this.paginatorModel.visiblePages);
    this.pageWindowStart = 0;
    this.calculatePageWindowEnd();
  }

  private calculatePageWindowEnd(): void {
    this.pageWindowEnd = this.pageWindowStart + this.paginatorModel.visiblePages - 1;
    this.recalculatePageLinks();
  }

  emitOnPageChange(): void {
    this.onPageChange.emit(this.currentPage + 1);
  }

  goToPage(page: number): void {
    this.currentPage = page - 1;
    this.emitOnPageChange();
  }

  goToFirst(): void {
    this.currentPage = 0;
    this.updateVisiblePage();
    this.emitOnPageChange();
  }

  goToPrevious(): void {
    this.currentPage -= 1;
    this.updateVisiblePage();
    this.emitOnPageChange();
  }

  goToNext(): void {
    this.currentPage += 1;
    this.updateVisiblePage();
    this.emitOnPageChange();
  }

  goToLast(): void {
    this.currentPage = this.totalNumberOfPages - 1;
    this.updateVisiblePage();
    this.emitOnPageChange();
  }

  isFirstPage(): boolean {
    return this.currentPage === 0;
  }

  isLastPage(): boolean {
    return this.currentPage === this.totalNumberOfPages - 1;
  }

  isCurrentPage(pageLink: number): boolean {
    return this.currentPage === pageLink - 1;
  }

  private updateVisiblePage(): void {
    if (this.currentPage > this.pageWindowEnd) {
      this.pageWindowStart += (this.currentPage - this.pageWindowEnd);
      this.calculatePageWindowEnd();
    } else if (this.currentPage < this.pageWindowStart) {
      this.pageWindowStart -= (this.pageWindowStart - this.currentPage);
      this.calculatePageWindowEnd();
    }
  }

  private recalculatePageLinks(): void {
    this.pageLinks = [];

    for (let i = this.pageWindowStart; i <= this.pageWindowEnd; i++) {
      this.pageLinks.push(i + 1);
    }
  }
}

