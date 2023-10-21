import { Component } from '@angular/core';
import { LocationInputComponent } from './location-input/location-input.component';


@Component({
  imports: [
    LocationInputComponent,
  ],

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nearby-places-app';
}
