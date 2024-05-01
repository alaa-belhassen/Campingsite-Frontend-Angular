import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-stat',
  templateUrl: './card-stat.component.html',
  styleUrls: ['./card-stat.component.scss']
})
export class CardStatComponent implements OnInit {

  constructor() { }
  @Input() title;
  @Input() value;
  @Input() since;
  @Input() growth;

  ngOnInit(): void {
  }

}
