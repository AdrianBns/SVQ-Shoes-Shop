import { ItemListService } from './../item-list/item-list.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item-list/item.model';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.scss']
})
export class ItemNewComponent implements OnInit {

  newItem: Item = new Item();

  constructor(private router: Router, private service: ItemListService) { }

  ngOnInit(): void {
  }
  navigateToItemList(){
    this.router.navigate(['/home']);
  }


  createNewItem(item: Item){
    item.editDescription=false;
    item.quantity = 0;
    item.selected = false;

    this.service.addItem(item)
      .subscribe(data => this.navigateToItemList());

  }
}
