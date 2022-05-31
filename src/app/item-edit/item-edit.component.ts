import { ItemListService } from './../item-list/item-list.service';
import { ItemListComponent } from './../item-list/item-list.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item-list/item.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {

  id: number;
  item: Item;

  constructor(private service: ItemListService, private route: ActivatedRoute, private router: Router) {
   this.item = new Item();

   }

  ngOnInit() {

    this.route.params.subscribe(params => {

      const id = <number>params['id'];

      if(id != null){

        this.service.getItem(id).subscribe(data => this.item = data);

      }
    })

  }

  navigateToItemList(){
    this.router.navigate(['/home']);
  }

  emitEditItem(item:Item){
    item.editDescription=false;
    item.quantity = 0;
    item.selected = false;
    this.service.updateItem(item).subscribe()
    this.navigateToItemList()
  }

}
