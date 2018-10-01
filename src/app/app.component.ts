import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';

import {Ng2EmojiService} from 'ng2-emoji';
import { BaconDirective } from './bacon.directive'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Emojidemo';
  event:string = '';
  id = '';
  unified = ''
  itemss: string[] = [];
  colons=''

  public messageString: String = "";

  emojis: Array<string>;
  constructor() {
    this.emojis = Ng2EmojiService.emojis;
  }

  ngOnInit(){ }
  
  emojiFallback = (emoji: any) => `:${emoji.short_names[0]}`;

  handleClick($event: any) {
    console.log(">>>>>event>>>>>>", $event)
    if ($event) {
      this.event += $event.emoji.native
      this.id = $event.emoji.id
      this.itemss.push(this.id)
      this.unified = $event.emoji.unified

      this.colons = $event.emoji.colons

      console.log(">>>unified>>>>",this.colons)


      this.messageString = `Hello, how are you? ${this.colons} `
    }
  }

  count: number = 0;
  
  updateFromChild($event){
    this.count++;
  }
  
  reset(){
    this.count = 0;
  }

  extraIngredient: string;

  @ViewChild(BaconDirective)
  set appBacon(directive: BaconDirective) {
    this.extraIngredient = directive.ingredient;
  };

  ngAfterViewInit() {
    console.log(this.extraIngredient); // mayo
    this.someInput.nativeElement.value = "jalapenos! 🍕🍕";

  }

  @ViewChild('someInput') someInput: ElementRef;

}
