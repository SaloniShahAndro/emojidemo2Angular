import { Directive ,ElementRef, OnInit } from '@angular/core';
// declare var require: any
// const google = require('@types/googlemaps');

@Directive({
  selector: '[appGooglePlaces]'
})
export class GooglePlacesDirective {

  private element: HTMLInputElement;

  constructor(private elRef: ElementRef) {
    //elRef will get a reference to the element where
    //the directive is placed
    this.element = elRef.nativeElement;
  }

  ngOnInit() {
   // const autocomplete = new google.maps.places.Autocomplete(this.element);
  }

}
