import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
// Import the google.d.ts declaration
import '../../google.d.ts';


@Component({
  selector: 'app-map-display',
  template: '<div id="map" style="width: 100%; height: 400px;"></div>',
  styleUrls: ['./map-display.component.css']
})
export class MapDisplayComponent implements OnInit {


  ngOnInit(): void {
    this.loadGoogleMaps();
    
  }

  initMap() {
    // Create a new Google Map instance1
    const map = new google.maps.Map(document.getElementById('map')!, {
      center: { lat: 40.7128, lng: -74.0060 }, // New York City coordinates
      zoom: 12
    });

    // Add a marker to the map
    const marker = new google.maps.Marker({
      position: { lat: 40.7128, lng: -74.0060 },
      map: map,
      title: 'New York City'
    });
  }

  loadGoogleMaps() {
    const apiKey = environment.key; // API anahtarını config dosyasından alınması

    // Google Maps API yükleme
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;

    // Harita API yüklendiğinde çağrılacak işlev
    script.onload = () => {
      // Harita yüklendi, haritayı oluşturmak için bu kodu kullanabilirsiniz
      this.initMap();
      //this.updateMap('37.7749', '-122.4194', '5000'); // Örnek verilerle haritayı güncelleyin
    };

    document.head.appendChild(script);
  }
}
