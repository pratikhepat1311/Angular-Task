import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
@Directive({
  selector: '[appTempdirective]',
  providers: [{ provide: NG_VALIDATORS, useExisting: TempdirectiveDirective, multi: true }]
})
export class TempdirectiveDirective implements Validator {

  @Input('appPasswordMatch') passwordToMatch: string ='';

 

  validate(control: AbstractControl): ValidationErrors | null {

    const password = control.value;

    const confirmPassword = control.root.get(this.passwordToMatch)?.value;

 

    return password === confirmPassword ? null : { passwordMismatch: true };

  }

}

