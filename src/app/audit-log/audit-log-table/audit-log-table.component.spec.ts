import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditLogTableComponent } from './audit-log-table.component';

describe('AuditLogTableComponent', () => {
  let component: AuditLogTableComponent;
  let fixture: ComponentFixture<AuditLogTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditLogTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditLogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
