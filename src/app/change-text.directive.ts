import { Directive, ElementRef } from '@angular/core';
import { Renderer } from '@angular/core';

import { HostBinding } from '@angular/core'
import { HostListener } from '@angular/core'


@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {
  @HostBinding('class.card-outline-primary') private ishovering: boolean;
  constructor(private Element: ElementRef, private renderer: Renderer) {
    console.log(Element);
    Element.nativeElement.innerText = "Text is changed by changeText Directive. ";
    Element.nativeElement.style.backgroundColor = 'green';
    Element.nativeElement.style.fontFamily = 'arial';
    Element.nativeElement.style.color = 'yellow';
    Element.nativeElement.style.fontSize = '18px';
  }
  @HostListener('mouseover') onMouseOver() {
    let part = this.Element.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'display', 'block');
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.Element.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'display', 'none');
    this.ishovering = false;
  }
}
