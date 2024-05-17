import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/Product';
import { ProduitserviceService } from 'src/app/services/produitservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
  }
  
}
