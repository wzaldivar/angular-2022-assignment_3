import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  showSpecialOrder = false;
  counter = 0;
  buttonClicks = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSpecialOrder() {
    this.counter += 1;
    this.buttonClicks.push(this.counter);
    this.showSpecialOrder = !this.showSpecialOrder;
  }

  getClass(value: number) {
    return value >= 5 ? 'whiteText' : '';
  }

  getColor(value: number) {
    return value >= 5 ? 'blue' : 'none';
  }
}
