import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'irco-app';

  locations: string[] = [
    'Africa House',
    'Earl Boyes Elementary',
    'George Middle School',
    'Gilbert Heights Elementary',
    'Gilbert Park Elementary'
  ];
}
