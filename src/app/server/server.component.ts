
// we have to import the component from package
import { Component } from '@angular/core';

// Enhance elements in your classes
// Tells angular what to do with this class
@Component({
  // select unique selector name
  selector: 'app-server',
  templateUrl: './server.component.html'
})
// lets you use it outside of this component
export class ServerComponent {

}
