import { TestBed } from '@angular/core/testing';

import { AuditLogService } from './audit-log.service';
import { AuditLogRequestModel } from '../model/audit-log-request.model';
import { AuditLogResponseModel } from '../model/audit-log-response.model';

describe('AuditLogService', () => {
  let service: AuditLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data', (done: DoneFn) => {
    const auditLogRequestModel = new AuditLogRequestModel(2, 3);
    service.getAsynch(auditLogRequestModel).subscribe((arm: AuditLogResponseModel) => {
      expect(arm.auditLogs.length).toBe(3);

      expect(arm.auditLogs[0].id).toBe('3');
      expect(arm.auditLogs[1].id).toBe('4');
      expect(arm.auditLogs[2].id).toBe('5');

      expect(arm.totalRecords).toBe(9);

      done();
    });
  });
});
