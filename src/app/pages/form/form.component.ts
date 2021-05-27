import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from 'src/assets/service/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {
  @Output() newItemEvent = new EventEmitter<any>();
  @Input() i:any;
  item:any
  f = 'male'
  clear= true
  
  constructor(private data:DataService) { }

  ngOnChanges(changes: SimpleChanges): void {

    this.item = this.data.dataArray[this.i]
    console.log('data to change ',this.item, ' at ', this.i,' index');
    if(this.item?.gender){
    this.userForm.get('gender')?.setValue(this.item?.gender)
    }


console.log('cartData',this.data.cartData);
    


    
  }

  ngOnInit(): void {

  console.log("gender: ",this.item?.gender);
  
   
    
  }

  userForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      // Validators.pattern('[a-zA-Z]{4,8}$')
    ]),
    gender: new FormControl(this.f,[
      Validators.required,
    ]),
    email: new FormControl('',[
      Validators.required,
      // Validators.minLength(4),
      Validators.pattern('[^0-9]([a-zA-Z0-9+_.-])+[@]+[a-zA-Z0-9]+[.]+[a-z]{2,4}$')
    ]),
    mobile: new FormControl('',[
      Validators.required,
      // Validators.minLength(4),
      Validators.pattern('^[6-9][0-9]{9}$')
    ]),
    about: new FormControl('',[
      Validators.required,
      Validators.maxLength(20),
      // Validators.pattern('[a-zA-Z]{4,8}$')
    ]),
  });

   
  addNewItem() {
    if(this.i != undefined){
           

      let a= this.userForm.value

      this.data.dataArray[this.i]= a

      this.reset()
  

      
    }else{

      console.log('else session');
      
      let a= this.userForm.value
    this.data.dataArray.push(a)
    this.reset()

    }    

    this.reset()
  }

  reset(){
    this.clear = true
    this.i = null
    this.userForm.reset()
  }


 
}
