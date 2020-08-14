import { Injectable } from '@angular/core';

import { getAuditLogMocks } from '../mock/audit-log.mock';
import { AuditLogModel } from '../model/audit-log.model';
import {Observable, of} from 'rxjs';
import { AuditLogRequestModel } from '../model/audit-log-request.model';

@Injectable({
  providedIn: 'root'
})
export class AuditLogService {
  auditLogs: AuditLogModel[] = [];

  constructor() {
    this.auditLogs = getAuditLogMocks(9);
  }

  get(size: number = 32): AuditLogModel[] {
    return getAuditLogMocks(size);
  }

  getAsynch(alrm: AuditLogRequestModel): Observable<AuditLogModel[]> {
    const totalNumberOfPages = Math.ceil(this.auditLogs.length / alrm.rowsPerPage) || 1;

    if (alrm.pageNumber < 1)  {
      return of([]);
    } else if (alrm.pageNumber > totalNumberOfPages) {
      return of([]);
    }

    const start = (alrm.pageNumber - 1) * alrm.rowsPerPage;
    const end = Math.min(start + alrm.rowsPerPage, this.auditLogs.length);

    return of(this.auditLogs.slice(start, end));
  }
}
