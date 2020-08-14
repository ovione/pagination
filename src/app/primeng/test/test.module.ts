import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [TestComponent],
  exports: [TestComponent],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class TestModule { }
