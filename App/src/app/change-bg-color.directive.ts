import { Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeBgColor]'
})
export class ChangeBgColorDirective {
@Input() set appChangeBgColor(color: string) {
  this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
}

constructor(private el: ElementRef, private renderer: Renderer2) {
  
}
}




