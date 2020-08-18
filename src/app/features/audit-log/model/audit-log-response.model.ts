import { AuditLogModel } from './audit-log.model';

export class AuditLogResponseModel {
  constructor(public auditLogs: AuditLogModel[], public totalRecords: number) {}
}
