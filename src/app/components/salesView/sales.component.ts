import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '@environments/environment';
import { VentasService } from '@services/sales.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-ventas',
  imports: [CommonModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css',
})


export class SalesComponent implements OnInit, OnDestroy {
  utilidades: Array<any> = [];
  miArray: any[][] = [];
  valor1: any = 1;
  valor2: any = 2;
  varPaginacion: any = environment.paginationVar;
  arrayPages: [] = [];
  ventas: any;
  ventasFormato: any;
  totalAnio: any;
  totalMes: any;
  totalDia: any;
  private destroy$ = new Subject<void>();

  constructor(
    private ventasService: VentasService,

  ) {
  

  }

  ngOnInit() {
    this.getSaleService(1, this.varPaginacion);
  }

  getSaleService(valor1: any, valor2: any): void {
    this.ventasService.getSales(valor1, valor2).pipe(takeUntil(this.destroy$)).subscribe((response) => {
      this.ventas = response;
    
    });
  }

  ngOnDestroy() {
  this.destroy$.next();   // 🚨 cancela todo
  this.destroy$.complete();
}
}
