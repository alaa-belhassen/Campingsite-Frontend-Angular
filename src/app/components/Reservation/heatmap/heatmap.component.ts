import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation-service.service';


@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss']
})

export class heatmapComponent implements OnInit {

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    // this.getHeatmap();
  }

  // getHeatmap(): void {
  //   this.reservationService.getHeatMap().subscribe(response => {
   
  //     const iframe = document.getElementById('heatmap') as HTMLIFrameElement;
  //     iframe.src = iframe.src; 
  //   });
  // }

  refreshHeatmap(): void {
    // this.getHeatmap();
  }
}
