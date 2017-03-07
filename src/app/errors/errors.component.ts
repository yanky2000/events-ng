import { Component, OnInit } from '@angular/core';

@Component({
  template:`
    <h1> Page not found, 404! </h1>
  `,
  styles: [`
    h1 {
      font-size: 42px;
      color: blue;
      margin: 50%
    }
  `],
})
export class Error404 implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
