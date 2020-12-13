import { Component, OnInit } from '@angular/core';

import { Brand } from '../brand.model';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands: Brand[] = [
    new Brand(
      'Itea',
      'Description of Itea',
      './assets/img/itea.png'
    ),
    new Brand(
      'ShareTea',
      'Description of ShareTea',
      './assets/img/sharetea.jpg'
    ),
    new Brand(
      'YiFang',
      'Description of YiFang',
      './assets/img/yifang.jpg'
    ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
