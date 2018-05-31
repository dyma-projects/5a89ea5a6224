import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Output() public plus: EventEmitter<void> = new EventEmitter<void>();
  @Output() public moins: EventEmitter<void> = new EventEmitter<void>();
  @Input() public result: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  public incremente() {
    this.plus.emit();
  }

  public decremente() {
    this.moins.emit();
  }

}
