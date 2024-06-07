import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-hover-fancy-produit',
  templateUrl: './card-hover-fancy-produit.component.html',
  styleUrls: ['./card-hover-fancy-produit.component.scss']
})
export class CardHoverFancyProduitComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  @Input() title;
  @Input() description;
}
