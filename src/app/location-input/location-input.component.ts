import { Component, ViewChild } from '@angular/core';
import { MapDisplayComponent } from '../map-display/map-display.component'; // MapDisplayComponent bileşeninin içe aktarılması

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.css']
})
export class LocationInputComponent {
  latitude: string = '';
  longitude: string = '';
  radius: string = '';

  // MapDisplayComponent bileşenine erişim için ViewChild kullanılması
  @ViewChild(MapDisplayComponent) mapDisplayComponent!: MapDisplayComponent;

  searchLocations() {
    // Kullanıcı formunu gönderdiğinde buradaki kod çalışacak
    // Verileri işlemek ve haritayı güncellemek için
    this.updateMap();
    console.log("selam");
  }

  updateMap() {
    // Harita bileşenini güncellemek için MapDisplayComponent ile iletişim kurulması
    // Bu bileşen, haritayı yüklemek ve güncellemek için kullanılır

    // Örnek olarak, MapDisplayComponent ile iletişim kurmak için bu bileşenin bir yöntemini çağırabilirsiniz.
    const latitude = this.latitude;
    const longitude = this.longitude;
    const radius= this.radius;

    //this.mapDisplayComponent.updateMap(latitude, longitude,radius);
    this.mapDisplayComponent.initMapwithParameter(latitude, longitude,radius);
  }
}