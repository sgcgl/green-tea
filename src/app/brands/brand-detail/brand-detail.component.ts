import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.css']
})
export class BrandDetailComponent implements OnInit {

  @Input() brands: {name: string, description: string, imagePath: string};

  brand;

  constructor() { }

  ngOnInit(): void {
  }

}
