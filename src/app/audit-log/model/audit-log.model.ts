export class AuditLogModel {
  constructor(public id: string,
              public date: string,
              public action: string,
              public username: string,
              public comment: string,
              public link: string) {}
}
