import { Component } from '@angular/core';
import { Permission } from './permission/permission';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ...
  
  private permission:Permission;

  constructor(){
    this.permission = new Permission;
  }

  debug = () => {
    this.permission.binary = "1000";
    console.log(this.permission.binary);
  }

}
