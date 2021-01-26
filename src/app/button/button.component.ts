import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('name') name: string;
  @Input('type') type: string;

  @Output('change') change = new EventEmitter();

  constructor() {
    console.log('Constructor');
    console.log('name: ', this.name);
    console.log('type: ', this.type);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log('name: ', this.name);
    console.log('type: ', this.type);
  }
}
