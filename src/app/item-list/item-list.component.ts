import { CartService } from './../cart/cart.service';
import { ItemListService } from './item-list.service';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Item } from './item.model';
import { Router } from '@angular/router';
import { Cart } from './cart.model';
import { ItemEditComponent } from '../item-edit/item-edit.component';



@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})

/* En el constructor se pasan los servicios que se han inyectados. Una vez así
estos pasan a formar parte por lo que se llaman con this. y desde ahí a sus
métodos. */

export class ItemListComponent implements OnInit {

  myItems: Item[] /* Array para recoger lo que devuelve el método del servicio de ItemListServicer */
  itemNew: Item = new Item ();
  itemToEdit: Item;
  editMode: Boolean = false;
  cartQuantity: number;


  constructor(private ItemListService: ItemListService, private router: Router, private CartService: CartService) {
    this.cartQuantity = this.CartService.getNumberOfItem();
   }

  ngOnInit(){

    this.loadItems();


  }


  loadItems() {
    return this.ItemListService.getItemList()
    .subscribe((data: Item[]) => {
      this.myItems = data
      this.myItems.forEach(e => e.editDescription = false,
      this.myItems.forEach(e => e.selected = false,
      this.myItems.forEach(e => e.quantity == 0)))
    })

  }

  showEditMode(){
    console.log('Hola')
    this.editMode = !this.editMode
  }

  sumarStock(){
    return this.myItems.reduce((acumulado, myItems) => acumulado + myItems.stock, 0);

  }

  mouseOver(item:Item):void{

    item.selected = !item.selected



  }
  pushItemToCart(item: Item){
    this.CartService.addItem({...item});
    this.cartQuantity = this.CartService.getNumberOfItem();
    item.quantity = 0;


  }

  updateItem(item: Item) {
    this.ItemListService.updateItem(item)
      .subscribe(data => this.loadItems());
    item.editDescription = false;


  }

  deleteItem(item: Item) {
    this.ItemListService.deleteItem(item.id)
      .subscribe( data => {
        this.myItems = this.myItems.filter(el => {return el.id !== item.id});
      })
  }
  editModeOn(){
    this.editMode = !this.editMode;
  }



  navigateToItemList(){
    this.router.navigate(['/item-new']);
  }
  navigateToEditItem(){
    this.router.navigate(['item/:id'])
  }
  navigateToCart(){
    this.router.navigate(['cart'])
  }
}
