import { Component, Input, Output, EventEmitter  } from '@angular/core';

interface item {
  detalle:string;
  tachado:boolean;
}
@Component({
  selector: 'item',
  templateUrl: './item.component.html'
 })
export class ItemComponent {

  @Input()
  private item: item;

  @Output()
  private remove = new EventEmitter<any>();

  fireRemove() {
    this.remove.emit();
  }
}

