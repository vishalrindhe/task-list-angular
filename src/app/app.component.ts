import { Component, Input } from '@angular/core';
import { DataService } from 'src/assets/service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pqr';
  
  /**
   * used to store index value of table entry which is selected to edit
   * @type {*}
   * @memberof AppComponent
   */
  currentData: any;

  /**
   * used for input to filter out table fields
   * @memberof AppComponent
   */
  search = '';

  /**
   * assign dataArray from service which hold all table data
   * @type {*}
   * @memberof AppComponent
   */
  dataArray: any = this.data.dataArray;

  // waste
  a = [
    { color: 'white', size: 'XXL' },
    { color: 'red', size: 'XL' },
    { color: 'black', size: 'M' },
  ];

  /**
   * getting index number of entry from table and passing it to child compopnent through @output decorator by 'currentData' variable
   * @param {*} i
   * @memberof AppComponent
   */
  editData(i: any) {
    this.currentData = i;
  }

  constructor(private data: DataService) {}

  /**
   * used for form input by @input decorator
   * @param {*} newItem
   * @memberof AppComponent
   */

  addItem(newItem: any) {}

  /**
   * splicing array object from dataArray of service
   * used as delete
   * @param {number} i
   * @memberof AppComponent
   */
  deletedata(i: number) {
    this.data.dataArray.splice(i, 1);
  }
}
