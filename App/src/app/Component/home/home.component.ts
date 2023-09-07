import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/Services/myservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    
  }
  //String Interpolation
  username: string = 'Hello, Pratik!';

  //Event Binding
  message:string='';
  handleClick(): void {
    this.message = 'Button Clicked!';
  }
  
  //Property binding
  buttonText: string = 'Click button';
  
  //Style Binding
  backgroundColor: string = 'SkyBlue';

  //Toggle
  showMessage: boolean = false;
  toggle: string = 'My name is Pratik.';


  //Count Increment and Decrement
  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
  
  //json data
  jsonData = [
    {
      "id": 1,
      "name": "Pratik",
      "address": "Wardha",
      "mobileNo": "8181019101",
      "email": "pratik@gmail.com"
    },
    {
      "id": 2,
      "name": "Luffy",
      "address": "Grand Line",
      "mobileNo": "9118292000",
      "email": "luffy@gmail.com"
    },
  ];
}