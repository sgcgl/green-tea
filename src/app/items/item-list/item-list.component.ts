import { Component, OnInit } from '@angular/core';

import { Item } from '../item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[] = [
    new Item(
      'Milk Tea',
      'Description of Milk Itea',
      './assets/img/boba-milk-tea.jpg'
    ),
    new Item(
      'Green Tea',
      'Description of Green Tea',
      './assets/img/bubble-green-tea.png'
    ),
    new Item(
      'Strawberry Fruit Tea',
      'Description of Strawberry Fruit Tea',
      './assets/img/strawb-fruit-tea.jpg'
    ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
