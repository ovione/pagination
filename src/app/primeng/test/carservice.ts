import { Injectable } from '@angular/core';

import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  data = [];

  constructor() {
    this.data = [
      {
        vin: 'ee8a89d8',
        brand: 'Fiat',
        year: 1987,
        color: 'Maroon'
      },
      {
        vin: 'ee8a89d8',
        brand: 'Fiat',
        year: 1987,
        color: 'Maroon'
      },
      {
        vin: 'ee8a89d8',
        brand: 'Fiat',
        year: 1987,
        color: 'Maroon'
      },
      {
        vin: 'ee8a89d8',
        brand: 'Fiat',
        year: 1987,
        color: 'Maroon'
      },
      {
        vin: 'ee8a89d8',
        brand: 'Fiat',
        year: 1987,
        color: 'Maroon'
      },
      {
        vin: 'ee8a89d8',
        brand: 'Fiat',
        year: 1987,
        color: 'Maroon'
      },
      {
        vin: 'ee8a89d8',
        brand: 'Fiat',
        year: 1987,
        color: 'Maroon'
      },
      {
        vin: 'ee8a89d8',
        brand: 'Fiat',
        year: 1987,
        color: 'Maroon'
      },
      {
        vin: 'ee8a89d8',
        brand: 'Fiat',
        year: 1987,
        color: 'Maroon'
      },
      {
        vin: 'ee8a89d8',
        brand: 'Fiat',
        year: 1987,
        color: 'Maroon'
      },
      {
        vin: 'ee8a89d8',
        brand: 'Fiat',
        year: 1987,
        color: 'Maroon'
      },
      {
        vin: 'ee8a89d8',
        brand: 'Fiat',
        year: 1987,
        color: 'Maroon'
      },      {
        vin: 'ee8a89d8',
        brand: 'Fiat',
        year: 1987,
        color: 'Maroon'
      },
      {
        vin: 'ee8a89d8',
        brand: 'Fiat',
        year: 1987,
        color: 'Maroon'
      },
      {
        vin: 'ee8a89d8',
        brand: 'Fiat',
        year: 1987,
        color: 'Maroon'
      },
      {
        vin: 'ee8a89d8',
        brand: 'Fiat',
        year: 1987,
        color: 'Maroon'
      }
      ];
  }

  getCarsLarge(): any[] {
    return this.data;
  }
}
