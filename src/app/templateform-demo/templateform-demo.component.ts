import { Component, OnInit } from '@angular/core';

export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {}
}

@Component({
  selector: 'app-templateform-demo',
  templateUrl: './templateform-demo.component.html',
  styleUrls: ['./templateform-demo.component.css']
})
export class TemplateformDemoComponent implements OnInit {
  constructor() {}

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
  ngOnInit() {}
}
