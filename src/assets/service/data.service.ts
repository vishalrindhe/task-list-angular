import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dataArray: any = [
    {
      about: 'hjhj',
      email: 'h',
      gender: 'female',
      mobile: 'hj',
      name: 'abc'
    },
    {
      about: 'hjhj',
      email: 'h',
      gender: 'male',
      mobile: 'hj',
      name: 'abc'
    },
    {
      about: 'hjhj',
      email: 'h',
      gender: 'female',
      mobile: 'hj',
      name: 'xyz'
    },
    {
      about: 'hjhj',
      email: 'hghghghghhjhjhj',
      gender: 'female',
      mobile: 'hj',
      name: 'abc'
    },
  ];
  i!: number;
  navchange: EventEmitter<number> = new EventEmitter();
  cartData = new EventEmitter<any>();

  emitNavChangeEvent(number: any) {
    this.navchange.emit(number);
    console.log('emit nav change', this.navchange);
  }
  getNavChangeEmitter() {
    return this.navchange;
  }

  constructor() {}
}
