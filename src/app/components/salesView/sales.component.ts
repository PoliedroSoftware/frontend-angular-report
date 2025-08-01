import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from '@environments/environment';
import { Ventas } from './sales';
//import { HEROES } from './mock-heroes';
import { VentasService } from '@services/sales.service';

@Component({
  selector: 'app-ventas',
  imports: [CommonModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css',
})
export class SalesComponent {
  utilidades: Array<any> = [];
  miArray: any[][] = [];
  valor1: any = 1;
  valor2: any = 2;
  varPaginacion: any = environment.paginationVar;
  arrayPages: [] = [];
  ventas: any;
  totalAnio: any;
  totalMes: any;
  totalDia: any;

  constructor(private ventasService: VentasService) {}

  ngOnInit() {
    // Agrupar data2 por año y mes
    this.getSaleService(1, this.varPaginacion);
  }

  getSaleService(valor1: any, valor2: any): void {
    this.ventasService.getSales(valor1, valor2).subscribe((response) => {
      this.ventas = response;
    });
  }

}
