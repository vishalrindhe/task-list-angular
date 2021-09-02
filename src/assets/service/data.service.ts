import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dataArray: any = [
    {
      about: 'hjhj',
      email: 'abc0@ac.co',
      gender: 'female',
      mobile: '9876543210',
      name: 'abca'
    },
    {
      about: 'hjhj',
      email: 'abc1@ac.co',
      gender: 'male',
      mobile: '9876543211',
      name: 'abcd'
    },
    {
      about: 'hjhj',
      email: 'abc2@ac.co',
      gender: 'female',
      mobile: '9876543212',
      name: 'xydz'
    },
    {
      about: 'hjhj',
      email: 'abc3@ac.co',
      gender: 'female',
      mobile: '9876543213',
      name: 'abdc'
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
