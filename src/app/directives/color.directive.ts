import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: false
})
export class ColorDirective {

  constructor(private  eL: ElementRef) { }

  @HostListener('dblclick')
  onClick(){
    this.eL.nativeElement.style.backgroundColor = 'blue';

  }

}
