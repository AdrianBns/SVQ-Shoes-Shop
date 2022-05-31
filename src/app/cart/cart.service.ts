import { Injectable } from '@angular/core';
import { Cart } from '../item-list/cart.model';
import { Item } from '../item-list/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Cart;
  index:any;


  constructor() {
    this.cart = new Cart();
    this.cart.items = new Array();
  }


  addItem(item:Item){

    this.index = this.cart.items.findIndex((element:any) => element.id === item.id)

    if(this.index === -1){
      this.cart.items.push(item)
    } else{
      this.cart.items[this.index].quantity += item.quantity
    }

  }

  removeItem(item:Item){
    this.cart.items.forEach((items, index) => {
      if(items.id === item.id){
        this.cart.items.splice(index, 1)
      }
    })
  }
  reduceQuantity(item:Item){
    item.quantity--
  }
  amountQuantity(item:Item){
    item.quantity++
  }
  getAmoutItems(): number{
    if(this.cart.items === undefined){
      console.log('error, carro vacío')
    }
    return this.cart.items.reduce((acumulado,item) => acumulado + item.quantity, 0);
  }
  getTotalPrice(): number{

    if(this.cart.items === undefined){
      console.log('error, carro vacío')
    }
    return this.cart.items.reduce((acumulado,item) => acumulado + (item.price * item.quantity), 0);
  }
  getNumberOfItem(): number{
    return this.cart.items.length;
  }
  showCart(){
    return this.cart.items;
  }
}
