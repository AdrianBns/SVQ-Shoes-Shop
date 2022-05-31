import { CartService } from './../cart.service';
import { Cart } from './../../item-list/cart.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/item-list/item.model';

@Component({
  selector: 'app-cart-detail-component',
  templateUrl: './cart-detail-component.component.html',
  styleUrls: ['./cart-detail-component.component.scss']
})
export class CartDetailComponentComponent implements OnInit {

@Input() cart:Cart;
@Output() removeItem: EventEmitter<Item> = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  emitRemoveItem(item:Item){
    this.removeItem.emit(item);
  }
  emitTotalCart(){

  }
}
