import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective
{
  @Input('appResaltado') colorDeseado: string;

  constructor(private el: ElementRef)
  {
    this.el.nativeElement.style.backgroundColor = 'blue';
  }

  @HostListener('mouseenter') mouseEntro()
  {
    this.el.nativeElement.style.backgroundColor = this.colorDeseado;
  }

  @HostListener('mouseleave') mouseSale()
  {
    this.el.nativeElement.style.backgroundColor = null;
  }
}
