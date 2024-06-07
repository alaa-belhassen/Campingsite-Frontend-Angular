import {Component, Input, OnInit} from '@angular/core';
import {CampsiteService} from "../../services/campsite.service";

import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

@Component({
  selector: 'app-campsite-user',
  templateUrl: './campsite-user.component.html',
  styleUrls: ['./campsite-user.component.scss']
})
export class CampsiteUserComponent implements OnInit {
  map: mapboxgl.Map;
  currentCoords: any;
  marker: mapboxgl.Marker;

  constructor(private  campsiteservice:CampsiteService) {}

  ngOnInit(): void {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by this browser.");
      return;
    }

    this.initializeMap();
  }

  initializeMap(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.currentCoords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };

      // Initialize the map with the initial coordinates
      mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyYWhhbG91aSIsImEiOiJjbHdudXR5ZHkyYW80Mml0Z2o5cjRpYWZkIn0.yq0cY53L6w0i0c9BoaU9AA';
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.currentCoords.longitude, this.currentCoords.latitude],
        zoom: 8

      });
      this.map.addControl(new mapboxgl.NavigationControl());



      // Create a custom marker using an image
      const currentMarkerEl = document.createElement('img');
      currentMarkerEl.src = '/assets/img/icons/common/295-2953301_google-map-marker-green-removebg-preview.png'; // Path to your custom marker image
      currentMarkerEl.style.width = '60px'; // Adjust the size if necessary
      currentMarkerEl.style.height = '40px';

      // Create a marker at the initial position
      this.marker = new mapboxgl.Marker({element:currentMarkerEl})
        .setLngLat([this.currentCoords.longitude, this.currentCoords.latitude])
        .addTo(this.map);
      //create popup
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setText('You are here ! ');

      // Attach the popup to the marker
      this.marker.setPopup(popup);

      // Open the popup when the marker is clicked
      this.marker.getElement().addEventListener('click', () => {
        popup.addTo(this.map);
      });
      this.watchPosition();
      this.loadMarkers();
    });
  }

  watchPosition(): void {
    navigator.geolocation.watchPosition((position) => {
      const coords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      console.log(`Current position - lat: ${coords.latitude}, lon: ${coords.longitude}`);

      // Update the map center to the new position
      this.map.setCenter([coords.longitude, coords.latitude]);

      // Update the marker position
      this.marker.setLngLat([coords.longitude, coords.latitude]);
    });
  }

  campsites: any[] = [];
  loadMarkers(): void {
    this.campsiteservice.getAll().subscribe((locations: any[]) => {
      this.campsites = locations; // Store the raw response

      locations.forEach((location) => {
        const detail = location.detailCampSite;

        // Assuming coordonne is a string with "latitude,longitude"
        const [latitude, longitude] = detail.coordonne.split(',').map(Number);

        const marker = new mapboxgl.Marker()
          .setLngLat([longitude, latitude])
          .addTo(this.map);

        const popup = new mapboxgl.Popup({ offset: 25 })
          .setText(detail.description); // Use description or other relevant field for popup

        marker.setPopup(popup);

        marker.getElement().addEventListener('click', () => {
          popup.addTo(this.map);
        });
      });
    });
  }

}
