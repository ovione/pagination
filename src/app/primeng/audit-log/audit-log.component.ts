import { Component, OnInit } from '@angular/core';

import { AuditLogService } from '../../common/services/audit-log.service';

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.scss']
})
export class AuditLogComponent implements OnInit {

  constructor(private auditLogService: AuditLogService) { }

  ngOnInit(): void {
  }

}
