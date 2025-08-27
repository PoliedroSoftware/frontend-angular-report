import { Component } from '@angular/core';
import { NavComponent } from '@components/nav/nav.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { LoadingService } from './services/loading.service';
import { LoadingComponent } from '@components/loading/loading.component';

@Component({
  selector: 'app-root',
  imports: [NavComponent, LoadingComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'client';

  isLoading: Observable<boolean>;

  constructor(private loadingService: LoadingService) {
    this.isLoading = this.loadingService.loading$;
  }
}

