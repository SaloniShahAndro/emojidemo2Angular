import { Directive,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'blue',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];
  
  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;
  @HostBinding('style.border-width') borderWidth: string;
  @HostBinding('style.border-style') borderStyle: string;
  
  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.borderColor = this.possibleColors[colorPick];
    this.borderWidth = 'thick';
    this.borderStyle = 'solid';
    console.log("borderStyle",this.borderStyle)
  }
}
