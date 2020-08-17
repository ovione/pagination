import {AuditLogModel} from '../../model/audit-log.model';

export function getAuditLogMocks(size: number = 32): AuditLogModel[] {
  const auditLogSet: AuditLogModel[] = [];

  for (let i = 1; i <= size; i++) {
    auditLogSet.push(new AuditLogModel('' + i,
      '08/08/2020 ' + i,
      'action_' + i,
      'username_' + i,
      getComment('comment_' + i),
      'link_' + i));
  }

  return auditLogSet;
}

function getComment(initialComment): string {
  return initialComment + '     very big comment here that could take out tables cells';
}
