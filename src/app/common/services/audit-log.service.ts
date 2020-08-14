import { Injectable } from '@angular/core';

import { getAuditLogMocks } from '../mock/audit-log.mock';
import { AuditLogModel } from '../model/audit-log.model';
import {Observable, of} from 'rxjs';
import { AuditLogRequestModel } from '../model/audit-log-request.model';
import { AuditLogResponseModel } from '../model/audit-log-response.model';

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

  getAsynch(alrm: AuditLogRequestModel): Observable<AuditLogResponseModel> {
    const start = alrm.start;
    const end = start + alrm.rowsPerPage;

    return of(new AuditLogResponseModel(this.auditLogs.slice(start, end), this.auditLogs.length));
  }
}
