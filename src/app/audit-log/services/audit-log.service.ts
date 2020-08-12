import { Injectable } from '@angular/core';

import { AuditLogModel } from "../model/audit-log.model";
import { getAuditLogMock } from "../mock/audit-log.mock";

@Injectable({
  providedIn: 'root'
})
export class AuditLogService {

  constructor() { }

  get(): AuditLogModel[] {
    return getAuditLogMock();
  }
}
