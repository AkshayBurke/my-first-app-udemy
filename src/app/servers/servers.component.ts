import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  /*selector: '[app-servers]',

  selector: '.app-servers',
  */
  template: `<app-server></app-server>
                 <hr>
              <app-success-alert></app-success-alert>
              <app-warningalert></app-warningalert>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
