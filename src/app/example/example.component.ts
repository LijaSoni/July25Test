import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example',
  imports: [FormsModule,CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
// msg="";
// check:boolean=false;
// display(){
//   this.check=false;
// }

// stlist=[
//     {id:1,name:'Anu',Mark:66},
//     {id:2,name:'Amal',Mark:222},
//     {id:3,name:'Sona',Mark:555},
//   ]
 today=new Date().getDay();

 amount = 123.45;
  company = 'acme corporation';
  purchasedOn = '2024-07-08';
  public eventDate: Date = new Date(1988, 3, 15); 
}
