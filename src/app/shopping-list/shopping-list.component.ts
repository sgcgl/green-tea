import { Component, OnInit } from '@angular/core';

import { ItemUnits } from '../shared/itemUnits.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  itemUnits: ItemUnits[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.itemUnits = this.slService.getItemsUnit();
    this.slService.itemUnitsChanged.subscribe(
      (itemUnits: ItemUnits[]) => {
        this.itemUnits = itemUnits;
      }
    );
  }

}
