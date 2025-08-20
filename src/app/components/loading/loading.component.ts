import { Component } from '@angular/core';
import { LoadingService } from '@services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  imports: [CommonModule],
  template: `
    <div *ngIf="isLoading | async" class="overlay">
      <div class="loading-container">
        <div class="spinner"></div>
        <div class="Myparagraph">Cargando...</div>
      </div>
    </div>
  `,
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent {
  isLoading: any;

  constructor(private loadingService: LoadingService) {
    this.isLoading = this.loadingService.loading$;
  }
}
