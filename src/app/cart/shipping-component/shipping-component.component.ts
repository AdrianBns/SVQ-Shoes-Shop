import { CartService } from './../cart.service';

import { Router } from '@angular/router';
import { userOder } from './../../item-list/userOrder.model';
import { Component, EventEmitter, OnInit, Output, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Cart } from 'src/app/item-list/cart.model';
import { ObserversModule } from '@angular/cdk/observers';
import { Observable } from 'rxjs/internal/Observable';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping-component',
  templateUrl: './shipping-component.component.html',
  styleUrls: ['./shipping-component.component.scss']
})
export class ShippingComponentComponent implements OnInit, OnChanges {


  @Input() user:userOder;
  @Input() cartLength:number
  @Input() cartTotalPrice: number;
  @Input() cartTotalQuantity: number;

  cartService:CartService;

  form: FormGroup;





  constructor(private router:Router, private CartService:CartService, private fb: FormBuilder) {



   }

  ngOnInit(): void {

    this.user = new userOder();

    this.form = this.fb.group({
      "nombre":  ['', Validators.required],
      "direccion": ['', Validators.required],
      "email": ['', Validators.required]
    })


  }

  ngOnChanges(changes: SimpleChanges): void {

    if(changes['cartLength']){
      this.cartTotalPrice = this.CartService.getTotalPrice();
      this.cartTotalQuantity = this.CartService.getAmoutItems();

    }

  }


  emitUserOrder(user:userOder){


  }

  onSubmit(form: Form){
    /*this.userOrder.nombre = this.form.value.nombre;
    this.userOrder.direccion = this.form.value.direccion;
    this.userOrder.email = this.form.value.email*/
    this.user.nombre = this.form.value.nombre;
    this.user.direccion = this.form.value.direccion;
    this.user.email = this.form.value.email;



    this.form.reset();


  }
  navigateToShop(){
    this.router.navigate(['home'])
  }
}
