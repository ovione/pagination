import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng';
import { CarService } from './carservice';
import { Car } from './car';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  datasource: Car[];

  cars: Car[];

  totalRecords: number;

  cols: any[];

  loading: boolean;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.datasource = this.carService.getCarsLarge();
    this.totalRecords = this.datasource.length;

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];

    this.loading = true;
  }

  loadCarsLazy(event: LazyLoadEvent): void {
    this.loading = true;

    setTimeout(() => {
      if (this.datasource) {
        this.cars = this.datasource.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 1000);
  }
}
