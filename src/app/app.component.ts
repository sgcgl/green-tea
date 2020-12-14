import { Component } from '@angular/core';

@Component({
  // unique selector name
  selector: 'app-root',
  templateUrl: './app.component.html',
  // you could add more styles in the following array
  // styleUrls: ['./app.component.css']
  // Or when it's just some styles, you could also use it in the
  // following way
  styleUrls: ['./app.component.css']
  // styles: [`
  //   h3 {
  //     color: dodgerblue;
  //   }
  // `]
})

export class AppComponent {

  loadedFeature = 'item';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
