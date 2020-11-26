import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // you can add and use java script expressions
  template: `
    <app-server></app-server>
        <!--  with the back quote now you can add html expressions
        if you have more than 3 lines of code, it's better to have
        it in a separate file. -->
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
