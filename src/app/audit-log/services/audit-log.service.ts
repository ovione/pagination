import { Injectable } from '@angular/core';

import { AuditLogModel } from "../model/audit-log.model";
import { getAuditLogMock } from "../mock/audit-log.mock";

@Injectable({
  providedIn: 'root'
})
export class AuditLogService {

  constructor() { }

  get(size: number = 32): AuditLogModel[] {
    return getAuditLogMock(size);
  }
}
