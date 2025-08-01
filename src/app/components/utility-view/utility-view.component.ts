import { Injectable } from '@angular/core';
import { Utility } from './utility';
import { UtilityService } from '@services/utility.service';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-utilidad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './utility-view.component.html',
  styleUrl: './utility-view.component.css',
})
export class UtilityComponent {
  utility: any;

  valor1: any = 1;
  valor2: any = 2;
  arrayPages: [] = [];
  Resultados: number = 0;
  varPaginacion: any = environment.paginationVar;

  constructor(private utilityService: UtilityService) {}

  ngOnInit() {
    this.getUtility(1, this.varPaginacion);
  }

  getUtility(valor1: any, valor2: any): void {
    this.utilityService.getUtility(valor1, valor2).subscribe((response) => {
      this.utility = response;
    });
  }
}
