import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item-list/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  @Input()  editMode: Boolean = false;
  @Output() itemUpdated: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() itemDeleted: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() descriptionChanged: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() itemToChanged: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() exitDescriptionChanged: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() itemCart: EventEmitter<Item> = new EventEmitter<Item>();


  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  upQuantity(item: Item):void {

    if(item.stock){
      item.quantity++;
      item.stock--;

    }

  }
  downQuantity(item: Item):void {

    if(item.quantity > 0) {
      item.quantity--;
      item.stock++;

    }

  }
  checkQuantity(item:Item):void{
    /* Su valor, el del input, se recoge del ngModal, que para usarlo hay que añadir al
    import de app.module.ts 'FormsModule' */

    if( item.quantity >item.stock){
      item.quantity = item.stock
    } else if (item.quantity<0){
      item.quantity=0
    }
    item.stock-=item.quantity

  }



  emitUpdate(item: Item){
    this.itemUpdated.emit(item);
  }
  emitDelete(item: Item){
    this.itemDeleted.emit(item);
  }
  emitDescriptionChanged(item:Item){
    this.descriptionChanged.emit(item);
  }
  emitExitDescriptionChanged(item:Item){
    this.exitDescriptionChanged.emit(item)
  }
  emitItemChanged(item:Item){
    this.itemToChanged.emit(item);
  }
  emitCart(item:Item){
    this.itemCart.emit(item);
  }
  navigateToEditPage(item: Item){
    this.router.navigate([`item/${item.id}`])
  }

}
