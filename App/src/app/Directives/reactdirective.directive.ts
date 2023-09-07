import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appPasswordMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ReactdirectiveDirective,
      multi: true,
    },
  ],
})
export class ReactdirectiveDirective implements Validator {
  @Input('appPasswordMatch')
  userForm!: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    const controlToCompare = control.parent?.get(this.userForm);

    if (controlToCompare && controlToCompare.value !== control.value) {
      return { passwordMismatch: true };
    }

    return null;
  }
}


