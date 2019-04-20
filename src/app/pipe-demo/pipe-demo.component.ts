import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  public longData = 'this is a very long data';
  public shortData = ' short data';

  constructor() {}

  ngOnInit() {}
}
