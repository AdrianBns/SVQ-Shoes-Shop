import { Item } from './../item-list/item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  @Input() item:Item
  @Input() editMode:Boolean = false;
  @Input() newItem: Item = new Item();
  @Input() itemToEdit: Item;
  @Input() editCard: Boolean;
  @Output() newItemCreated: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() itemEdited: EventEmitter<Item> = new EventEmitter<Item>();



  createItemMode:Boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  editItem(item:Item){
    this.itemEdited.emit(item);
  }
  createNewItem(item:Item){
    this.newItemCreated.emit(item);
  }
}
