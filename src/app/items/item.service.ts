import {Item} from './item.model';
import {EventEmitter, Injectable} from '@angular/core';
import { ItemUnits } from '../shared/itemUnits.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class ItemService {
  itemSelected = new EventEmitter<Item>();
  private items: Item[] = [
    new Item(
      'Jasmin Milk Tea',
      'Product Description For Milk Itea',
      './assets/img/boba-milk-tea.jpg',
      [
        new ItemUnits('Boba', 1),
        new ItemUnits('Jelly', 1),
        new ItemUnits('Puddin', 1),
      ]),
    new Item(
      'Jasmin Green Tea',
      'Product Description For Green Tea',
      './assets/img/bubble-green-tea.png',
      [
        new ItemUnits('Boba', 4),
        new ItemUnits('Jelly', 2),
        new ItemUnits('Puddin', 1),
      ]
    ),
    new Item(
      'Strawberry Fruit Tea',
      'Product Description For Strawberry Fruit Tea',
      './assets/img/strawb-fruit-tea.jpg',
      [
        new ItemUnits('Fruit-pieces', 2),
      ]
    ),
    new Item(
      'Oi-Ocha Matcha Green Tea',
      'Product Description For Matcha Green Tea',
      './assets/img/Oi-Ocha-Matcha.jpg',
      [
        // new ItemUnits('', 0),
      ]
    ),
    new Item(
      'Yi-fang Fruit Tea',
      'Product Description For Yi-Fang Fruit Tea',
      './assets/img/yifang.jpg',
      [
        // new ItemUnits('Fruit-pieces', 2),
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
