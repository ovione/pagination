import { Injectable } from '@angular/core';

import { getAuditLogMocks } from '../mock/audit-log.mock';
import { AuditLogModel } from '../model/audit-log.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuditLogService {
  auditLogs: AuditLogModel[] = [];

  constructor() {
    this.auditLogs = getAuditLogMocks(32);
  }

  get(size: number = 32): AuditLogModel[] {
    return getAuditLogMocks(size);
  }

  getAsynch(page: number): Observable<AuditLogModel[]> {
    return of([]);
  }
}
