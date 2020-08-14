import {AuditLogModel} from "../model/audit-log.model";

export function getAuditLogMock(size: number = 32): AuditLogModel[] {
  const auditLogSet:AuditLogModel[] = [];

  for (var i = 1; i <= size; i++) {
    auditLogSet.push(new AuditLogModel('' + i, '08/08/2020 ' + i, 'action_' + i, 'username_' + i, 'comment_' + i, 'link_' + i));
  }

  return auditLogSet;
}
