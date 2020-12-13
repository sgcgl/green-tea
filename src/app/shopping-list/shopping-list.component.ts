import { Component, OnInit } from '@angular/core';

import { Item } from '../shared/Item.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items: Item[] = [
    new Item('Jasmin Green Tea', 5),
    new Item('Jasmin Milk Tea', 10),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
