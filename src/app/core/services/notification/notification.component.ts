import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: '<simple-notifications [options]="options"></simple-notifications>',
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public options = {
    position: ["bottom", "right"],
    timeOut: 4000,
    lastOnBottom: true,
    preventDuplicates:true

}
}
