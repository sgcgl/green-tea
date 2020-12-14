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
      'Description For Itea',
      './assets/img/itea.png'
    ),
    new Brand(
      'ShareTea',
      'Description For ShareTea',
      './assets/img/sharetea.jpg'
    ),
    new Brand(
      'YiFang',
      'Description For YiFang',
      './assets/img/yifang2.jpg'
    ),
    new Brand(
      'Happy Lemon',
      'Description For Happy Lemon',
      './assets/img/happy-lemon.jpg'
    ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
