import {Component, OnInit} from '@angular/core';
import {Item} from '../item.model';
import {ItemService} from '../item.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Item;
  id: number;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.item = this.itemService.getItem(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.itemService.addItemUnitsToShoppingList(this.item.itemUnits);
  }

}
