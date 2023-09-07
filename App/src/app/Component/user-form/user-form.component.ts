import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      dynamicElements: this.fb.array([]),
    });
  }

  get dynamicElementForms() {
    return this.myForm.get('dynamicElements') as FormArray;
  }

  addDynamicElement() {
    const dynamicElement = this.fb.group({
      
      name: [''],
      state:[''],
      country:['']
      
    });

    this.dynamicElementForms.push(dynamicElement);
  }

  removeDynamicElement(index: number) {
    this.dynamicElementForms.removeAt(index);
  }
}
