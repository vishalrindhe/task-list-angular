import { Component, Input } from '@angular/core';
import { DataService } from 'src/assets/service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pqr';
  currentData:any
  search = ''
  dataArray: any=this.data.dataArray

  a = [
    { color: 'white', size: 'XXL' },
    { color: 'red', size: 'XL' },
    { color: 'black', size: 'M' }
  ]
  
  editData(i:any){
    // this.currentData = i+1
    // console.log('i: ',this.currentData);
    this.currentData = i
    console.log('i: ',this.currentData);
    this.data.cartData.emit(i);
    this.data.emitNavChangeEvent(i);
    
    // console.log('sorted ',
    // this.a.sort((a:any, b:any) => (a.color > b.color) ? 1 : -1)
    // );
    
    // console.log('currentData',this.currentData);
    
  }



  constructor(private data: DataService){
    // console.log(this.dataArray);
    
  }


  addItem(newItem: any){
    // this.dataArray.push(newItem);
    // console.log(this.dataArray);
    
  }

  deletedata(i:number){
this.data.dataArray.splice(i,1)
  }

}
