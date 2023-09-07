import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  user = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    country: '',
    password:'',
    confirmPassword:'',
  };
  userForm: any;

  onSubmit(data:any) {
    if (this.user) {
      
      console.log('Form submitted:', data);
    } else {
      
      console.log('Form is invalid. Please check the fields.');
    }
  }

  }

