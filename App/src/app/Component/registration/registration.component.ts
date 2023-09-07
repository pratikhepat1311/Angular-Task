import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.pattern('[A-Za-z]+')]],
      email: ['', [Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')]],
      gender: ['male'],
      country: ['', [Validators.minLength(5)]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
      });
    
  }

  
  

  onSubmit(data:any) {
    
    if (this.userForm.valid) {
      console.log('Form submitted:', data);
    }
  }
}
