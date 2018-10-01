import { Component, OnInit ,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent implements OnInit {

  @Input("parentCount")
  count: number;
  
  @Output()
  incrementedvalue: EventEmitter<number> = new EventEmitter<number>();
  
  updateCount() {
    this.count++;
    this.incrementedvalue.emit(this.count);
  }
  constructor() { }

  ngOnInit() {
  }

}
