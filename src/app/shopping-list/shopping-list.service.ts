import {ItemUnits} from '../shared/itemUnits.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  itemUnitsChanged = new EventEmitter<ItemUnits[]>();
  private itemUnits: ItemUnits[] = [
    // new ItemUnits('Boba', 2),
    // new ItemUnits('Puddin', 2),
  ];

  // copy of the itemsUnit
  getItemsUnit() {
    return this.itemUnits.slice();
  }

  addItemUnit(itemUnit: ItemUnits) {
    this.itemUnits.push(itemUnit);
    this.itemUnitsChanged.emit(this.itemUnits.slice());
  }

  addItemUnits(itemUnits: ItemUnits[]) {
    this.itemUnits.push(...itemUnits);
    this.itemUnitsChanged.emit(this.itemUnits.slice());
  }

}
