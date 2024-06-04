import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../../../services/reclamation.service';


@Component({
  selector: 'app-afficher-reclamation-client',
  templateUrl: './afficher-reclamation-client.component.html',
  styleUrls: ['./afficher-reclamation-client.component.scss']
})
export class AfficherReclamationClientComponent implements OnInit {
  reclamations: any[] = [];
  displayedReclamations: any[] = [];
  currentPage = 1;
  pageSize = 5;
  totalPages = 0;
  pages: number[] = [];
  enAttenteCount: number = 0;
  SolvedReclamationNumberThisMonth: number = 0;
  reclamationCounts: { name: string, value: number }[] = [];
  idClient  = 2;

  constructor(private reclamationService: ReclamationService) { }

  ngOnInit(): void {
      this.loadReclamations();
      this.getEnAttenteReclamationNumber();
  }

  loadReclamations() {
    this.reclamationService.getAllReclamations().subscribe((data: any[]) => {
        // Filter reclamations based on client ID
        this.reclamations = data.filter(reclamation => reclamation.idClient === this.idClient);
        this.totalPages = Math.ceil(this.reclamations.length / this.pageSize);
        this.setPage(1);
    });
}
  setPage(page: number) {
      if (page < 1 || page > this.totalPages) {
          return;
      }
      this.currentPage = page;
      this.displayedReclamations = this.reclamations.slice((page - 1) * this.pageSize, page * this.pageSize);
      this.calculatePages();
  }

  prevPage() {
      this.setPage(this.currentPage - 1);
  }

  nextPage() {
      this.setPage(this.currentPage + 1);
  }

  calculatePages() {
      this.pages = [];
      for (let i = 1; i <= this.totalPages; i++) {
          this.pages.push(i);
      }
  }

  getEnAttenteReclamationNumber() {
      this.reclamationService.getEnAttenteReclamationNumber().subscribe((count: number) => {
          this.enAttenteCount = count;
      });
  }

  getSolvedReclamationNumberThisMonth() {
      this.reclamationService.getSolvedReclamationNumberThisMonth().subscribe((count: number) => {
          this.SolvedReclamationNumberThisMonth = count;
      });
  }

}
