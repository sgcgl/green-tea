
// we have to import the component from package
import { Component } from '@angular/core';

// Enhance elements in your classes
// Tells angular what to do with this class
@Component({
  // select unique selector name
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `
  ]
})
// lets you use it outside of this component
export class ServerComponent {
  // it automatically infers the type
  serverId = 10;
  serverStatus = 'offLine';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  // calling a method instead of variable
  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    // using ng style
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
