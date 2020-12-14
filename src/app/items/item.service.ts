import {Item} from './item.model';
import {EventEmitter, Injectable} from '@angular/core';
import { ItemUnits } from '../shared/itemUnits.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class ItemService {
  itemSelected = new EventEmitter<Item>();
  private items: Item[] = [
    new Item(
      'Milk Tea',
      'Description of Milk Itea',
      './assets/img/boba-milk-tea.jpg',
      [
        new ItemUnits('Boba', 1),
        new ItemUnits('Jelly', 1),
        new ItemUnits('Puddin', 1),
        new ItemUnits('Chia Seeds', 1)
      ]),
    new Item(
      'Green Tea',
      'Description of Green Tea',
      './assets/img/bubble-green-tea.png',
      [
        new ItemUnits('Boba', 4),
        new ItemUnits('Jelly', 2),
        new ItemUnits('Puddin', 1),
        new ItemUnits('Chia Seeds', 1)
      ]
    ),
    new Item(
      'Strawberry Fruit Tea',
      'Description of Strawberry Fruit Tea',
      './assets/img/strawb-fruit-tea.jpg',
      [
        new ItemUnits('Boba', 2),
        new ItemUnits('Jelly', 2),
        new ItemUnits('Puddin', 2),
        new ItemUnits('Chia Seeds', 2)
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {
  }

  // copy of a recipe
  getItems() {
    return this.items.slice();
  }

  getItem(index: number) {
    return this.items[index];
  }

  addItemUnitsToShoppingList(itemUnits: ItemUnits[]) {
    this.slService.addItemUnits(itemUnits);
  }

}
