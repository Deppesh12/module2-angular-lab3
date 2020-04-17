import { Component } from '@angular/core';
import { Products} from './products';
import { FormArray, FormGroup, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegisterForm';
  pid:number;
    ProductName:string;
    ProductCost:number;
    ProductOnline:string;
    ProductCat:string;
    Available:string;

  data:Array<any>=[
    {name:'Big Bazar',value:'Big bazar'},
    {name:'Dmart',value:'Dmart'}
  ];


  

  onSubmit(value:any){

    console.log(this.pid+" "+this.ProductName+" "+this.ProductCost+" "+this.ProductOnline+" "
    +this.ProductCat+" "+this.Available);
    
  }
}
