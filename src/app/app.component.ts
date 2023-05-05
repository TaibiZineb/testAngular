import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  //selector: '[my]',
  //selector: '.my',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  contact = {
    name: 'Zineb',
    email: 'taibi@gmail.com'
  }
}
