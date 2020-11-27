import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  // templateUrl: './success-alert.component.html',
  template: `
    <p>Successfull alert-component</p>
  `,
  // styleUrls: ['./success-alert.component.css']
  styles: [
    `
      p {
        padding: 20px;
        background-color: lime;
        border: 1px solid green;
      }
    `
  ]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
