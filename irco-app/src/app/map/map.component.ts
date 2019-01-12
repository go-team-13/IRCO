import {Component} from '@angular/core';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.scss' ]
})
export class MapComponent {
  zoom: number = 12;

  // initial center position for the map
  lat: number = 45.49442;
  lng: number = -122.55195;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  markers: marker[] = [
    {
      lat: 45.49442,
      lng: -122.55195,
      label: 'Earl Boyes Elementary',
      draggable: true
    },
    {
      lat: 45.59608,
      lng: -122.73669,
      label: 'George Middle School',
      draggable: true
    },
    {
      lat: 45.49042,
      lng: -122.53177,
      label: 'Gilbert Heights Elementary',
      draggable: true
    },
    {
      lat: 45.47866,
      lng: -122.52731,
      label: 'Gilbert Park Elementary',
      draggable: true
    },
    {
      lat: 45.50694,
      lng: -122.57481,
      label: 'Harrison Park K-8',
      draggable: true
    },
    {
      lat: 45.53818,
      lng: -122.56765,
      label: 'Jason Lee Elementary',
      draggable: true
    },
    {
      lat: 45.50694,
      lng: -122.57481,
      label: 'Harrison Park K-8',
      draggable: true
    },
    {
      lat: 45.4853,
      lng: -122.56409,
      label: 'Lents K-8',
      draggable: true
    },
    {
      lat: 45.5082,
      lng: -122.52626,
      label: 'Lincoln Park Elementary',
      draggable: true
    },
    {
      lat: 45.54185,
      lng: -122.58034,
      label: 'Madison High',
      draggable: true
    },
    {
      lat: 45.52549,
      lng: -122.53021,
      label: 'Menlo Park Elementary',
      draggable: true
    },
    {
      lat: 45.5098,
      lng: -122.54131,
      label: 'Mill Park Elementary',
      draggable: true
    },
    {
      lat: 45.55093,
      lng: -122.5406,
      label: 'Parkrose Middle School',
      draggable: true
    },
    {
      lat: 45.53946,
      lng: -122.60364,
      label: 'Rose City Park Elementary',
      draggable: true
    },
    {
      lat: 45.54136,
      lng: -122.5313,
      label: 'Russell Elementary',
      draggable: true
    },
    {
      lat: 45.5385,
      lng: -122.54478,
      label: 'Sacramento Elementary',
      draggable: true
    },
    {
      lat: 45.54944,
      lng: -122.52878,
      label: 'Shaver Elementary',
      draggable: true
    },
    {
      lat: 45.52136,
      lng: -122.54419,
      label: 'Ventura Park Elementary',
      draggable: true
    },
    {
      lat: 45.52461,
      lng: -122.57969,
      label: 'Vestal Elementary',
      draggable: true
    },
    {
      lat: 45.52275,
      lng: -122.40756,
      label: 'Walt Morey Middle School',
      draggable: true
    }
  ]
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
