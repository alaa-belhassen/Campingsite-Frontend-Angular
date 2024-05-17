import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/services/token-storage.service';
import { UserServiceService } from 'src/services/user-service.service';
=======
import { Product } from 'src/app/entities/Product';
import { ProduitserviceService } from 'src/app/services/produitservice.service';
>>>>>>> origin/alaa

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  favoriteSeasonStatistics: any[];
  favoriteSeason: any;
  favoriteLandscapeStatistics: any[];
  favoritLandscape:any;
  favoriteAccommodationTypeStatistics: any[];
  favoriteAccommodationType : any;


 ngOnInit(): void {
  this.getStatistics();

<<<<<<< HEAD
      
  }

  
  constructor(private formBuilder: FormBuilder , private userService : UserServiceService , private tokenStorage : TokenStorageService , private router : Router ) {

    
  }
  getStatistics(): void {
    this.userService.getFavoriteSeasonStatistics().subscribe(data => {
      this.favoriteSeasonStatistics = data;
      if (this.favoriteSeasonStatistics.length > 0) {
        this.favoriteSeason = this.favoriteSeasonStatistics[0];
      }
    


    });

    this.userService.getFavoriteLandscapeStatistics().subscribe(data => {
      this.favoriteLandscapeStatistics = data;
      if (this.favoriteLandscapeStatistics.length > 0) {
        this.favoritLandscape = this.favoriteLandscapeStatistics[0];
      }
    });

    this.userService.getFavoriteAccommodationTypeStatistics().subscribe(data => {
      this.favoriteAccommodationTypeStatistics = data;
      if (this.favoriteAccommodationTypeStatistics.length > 0) {
        this.favoriteAccommodationType = this.favoriteAccommodationType[0];
      }
    });
   
  }

=======
  ngOnInit(): void {
  }
  
>>>>>>> origin/alaa
}
