import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flowers-list',
  templateUrl: './flowers-list.component.html',
  styleUrls: ['./flowers-list.component.scss']
})
export class FlowersListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  flowers = [{name: "Daisy"},
             {name: "Rose"}];

}
