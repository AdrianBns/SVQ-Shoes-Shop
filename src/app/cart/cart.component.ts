import { userOder } from './../item-list/userOrder.model';
import { CartService } from './cart.service';
import { Item } from './../item-list/item.model';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../item-list/cart.model';
import { Form, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart:Cart;
  user:userOder;
  cartTotalQuantity: number;
  cartTotalPrice: number;
  cartService: CartService;
  cartLength: number

  constructor(private route: ActivatedRoute, private router: Router, private CartService:CartService) {

    this.cart = new Cart();
    this.cart.items = this.CartService.cart.items;
    this.cartTotalQuantity = this.CartService.getAmoutItems();
    this.cartTotalPrice = this.CartService.getTotalPrice();

  }

  ngOnInit(): void {



  }

  formUser(form:Event){
    console.log(form);

  }
  infoUser(user:object){
    console.log(user);

  }

  removeItemFromCart(item:Item){
    this.CartService.removeItem(item);

    this.cartLength = this.CartService.getNumberOfItem();


  }

  navigateToShop(){
    this.router.navigate(['home'])
  }
}
