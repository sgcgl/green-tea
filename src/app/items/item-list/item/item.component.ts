import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Item } from '../../item.model';
import {ItemService} from '../../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  // @Output() itemSelected = new EventEmitter<void>();

  // Inject Item Service
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onSelected() {
    // this.itemSelected.emit();
    this.itemService.itemSelected.emit(this.item);
  }

}
