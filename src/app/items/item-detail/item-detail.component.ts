import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../item.model';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.itemService.addItemUnitsToShoppingList(this.item.itemUnits);
  }

}
