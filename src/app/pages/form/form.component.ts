import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DataService } from 'src/assets/service/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnChanges {
  @Output() newItemEvent = new EventEmitter<any>();
  /**
   * input from parent App Component which pass index value of table entry for edit details
   * @type {*}
   * @memberof FormComponent
   */
  @Input() i: any

  /**
   * stored temp form data
   * @type {*}
   * @memberof FormComponent
   */
  item: any;

  /**
   * select male radio input at initialization
   * @memberof FormComponent
   */
  f = 'male';

  constructor(private data: DataService) {}

  /**
   * whenever user select table entry to edit details ngOnChanges will fire
   * so According to index value of table entry data will passed to "item" var
   * and intensionally set radio buttons according to "item.gender" value
   * @param {SimpleChanges} changes
   * @memberof FormComponent
   */
  ngOnChanges(changes: SimpleChanges) {
    this.item = this.data.dataArray[this.i];
    console.log('data to change ', this.item, ' at ', this.i, ' index');
    if (this.item?.gender) {
      this.userForm.get('name')?.setValue(this.item?.name);
      this.userForm.get('email')?.setValue(this.item?.email);
      this.userForm.get('mobile')?.setValue(this.item?.mobile);
      this.userForm.get('about')?.setValue(this.item?.about);
      this.userForm.get('gender')?.setValue(this.item?.gender);

      // this.userForm.get('gender')?.setValue(this.item?.gender);
    }

    console.log('cartData', this.data.cartData);
  }

  ngOnInit(): void {}

  /**
   * FormGroup, FormControl, validatiors of form declared here
   * @memberof FormComponent
   */
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{4,8}$')]),
    gender: new FormControl(this.f, [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '[^0-9]([a-zA-Z0-9+_.-])+[@]+[a-zA-Z0-9]+[.]+[a-z]{2,4}$'
      ),
    ]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('^[6-9][0-9]{9}$'),
    ]),
    about: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  });


  /**
   * If index value is available in "i" var then it will just update array object of dataArray
   * else it will push object into dataArray array
   *  after pushing or updating array it will clear the form
   * @memberof FormComponent
   */
  addNewItem() {
    if (this.i != undefined) {
      let valid = true
      let a = this.userForm.value;

      let dummyIndex = 0
      for(var x of this.data.dataArray) {
        console.log(x.mobile);        
        if (this.i != dummyIndex) {
          if (x.mobile == a.mobile) {
          
            this.data.dataArray.forEach((c:any) => {
              if ( c.email == a.email) {
                alert('invalid')
                valid = false  
                return
              }
            });
            
          }
        }
      
        dummyIndex++
      };


      if (valid) {
        this.data.dataArray[this.i] = a;
        this.reset();  
      }
      
    } else {
      let valid = true
      console.log('else session');
      let a = this.userForm.value;
      // this.data.dataArray.push(a);
      // this.reset();


      this.data.dataArray.forEach((x: any) => {
        let mobileNumber:boolean
        if (x.mobile == a.mobile) {

          this.data.dataArray.forEach((c:any) => {
            if ( c.email == a.email) {
              alert('your mobile number and emails is used by someone')
              valid = false    
            }
          });
          
        }
        
      });

      if (valid) {
        this.data.dataArray.push(a);
        this.reset();
      }
      
    }

    // this.reset();
  }

  /**
   * reset form inputs and make "i" var null
   * @memberof FormComponent
   */
  reset() {
    this.i = null;
    this.userForm.reset();
  }
}
