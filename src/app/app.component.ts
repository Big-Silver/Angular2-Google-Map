import { Component } from '@angular/core';
import { Map} from './map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  public map_items1 = [];
  public map_items2 = [];
  public map_tempItmes = [];
  public fontsize = "16px";
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  latitude: number = 51.678418;
  longitude: number = 7.809007;
  text: string = "I am a marker.";
  strokeColor: string = "#cccccc";
  fontWeight: string = "300";
  fontColor: string = "blue";
  fontSize: string = "20px";
  lastID1: number = 0;
  lastID2: number = 0;
  map: Map = new Map();
  toggle_value: boolean = true;

  addMarker(latitude, longitude, text, strokeColor, fontWeight, fontColor, fontSize) {
    this.map_tempItmes    = [];    
    this.map.lang         = latitude;
    this.map.long         = longitude;
    this.map.text         = text;
    this.map.strokecolor  = strokeColor;
    this.map.strokeweight = fontWeight;
    this.map.fontcolor    = fontColor;
    this.map.fontsize     = fontSize;
    if(this.toggle_value) {
      this.lastID1 = this.map_items1.length;
      this.map_tempItmes = this.map_items1;
      this.map.id = ++this.lastID1;
      this.map_items1.push(this.map);
    }      
    else {
      this.lastID2 = this.map_items2.length;
      this.map_tempItmes = this.map_items2;
      this.map.id = ++this.lastID2;
      this.map_items2.push(this.map);
    } 
    this.map = new Map;    
  }

  reSet() {
    this.latitude = 51.678418;
    this.longitude = 7.809007;
    this.text = "I am a marker.";
    this.strokeColor = "#cccccc";
    this.fontWeight = "300";
    this.fontColor = "blue";
    this.fontSize = "20px"; 
  }

  removeMarker(markerID) {
    let temp_ID = 1;
    if(this.toggle_value) {
      for(let i = 0; i < this.map_items1.length; i++) {        
        if(this.map_items1[i].id == markerID) {
          this.map_items1.splice(i, 1);
        }          
      }
      for(let i1 = 0; i1 < this.map_items1.length; i1++) {
        this.map_items1[i1].id = temp_ID;
        temp_ID++;
      }
    }
    else {
      for(let j = 0; j < this.map_items2.length; j++) {
        if(this.map_items2[j].id == markerID) {
          this.map_items2.splice(j, 1);
        }          
      }
      for(let j1 = 0; j1 < this.map_items2.length; j1++) {
        this.map_items2[j1].id = temp_ID;
        temp_ID++;
      }
    }
  }

  toggleMaps() {
    this.toggle_value = !this.toggle_value;
    if(this.toggle_value) {
      this.map_tempItmes = this.map_items1;
    }
    else {
      this.map_tempItmes = this.map_items2;
    }
  }
}
