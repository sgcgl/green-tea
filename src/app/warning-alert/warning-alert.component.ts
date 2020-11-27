import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  // templateUrl: './warning-alert.component.html',
  template: `
    <p>Warning alert-component</p>
  `,
  // styleUrls: ['./warning-alert.component.css']
  styles: [
    `
      p {
        padding: 20px;
        background-color: indianred;
        border: 1px solid red;
      }
    `
  ]
})
export class WarningAlertComponent implements OnInit {
  constructor() {  }

  ngOnInit(): void {
  }
}
