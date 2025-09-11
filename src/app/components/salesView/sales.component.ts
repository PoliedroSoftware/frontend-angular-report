import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '@environments/environment';
import { VentasService } from '@services/sales.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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

  constructor(private ventasService: VentasService) {}

  ngOnInit() {
    this.getSaleService(1, this.varPaginacion);
  }

  getSaleService(valor1: any, valor2: any): void {
    this.ventasService
      .getSales(valor1, valor2)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.ventas = response;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(); // 🚨 cancela todo
    this.destroy$.complete();
  }

  downloadPDF(type: 'year' | 'month' | 'day'): void {
    const doc = new jsPDF();
    let columns: string[] = [];
    let rows: any[] = [];
    let ventasArray: any[] = [];
    let title = '';

    switch (type) {
      case 'year':
        ventasArray = this.ventas?.forYear || [];
        columns = ['Año', 'Ventas'];
        rows = ventasArray.map((row: any) => [row.year, row.saleFormatted]);
        title = 'Reporte de Ventas por Año';
        break;

      case 'month':
        ventasArray = this.ventas?.forMonth || [];
        columns = ['Número de Mes', 'Año', 'Mes', 'Ventas'];
        rows = ventasArray.map((row: any) => [
          row.numberMonth,
          row.year,
          row.month,
          row.saleFormatted,
        ]);
        title = 'Reporte de Ventas por Mes';
        break;

      case 'day':
        ventasArray = this.ventas?.forDay || [];
        columns = ['Fecha', 'Número de Mes', 'Mes', 'Año', 'Ventas'];
        rows = ventasArray.map((row: any) => [
          row.date,
          row.numberMonth,
          row.month,
          row.year,
          row.saleFormatted,
        ]);
        title = 'Reporte de Ventas por Día';
        break;
    }

    if (!Array.isArray(ventasArray)) {
      console.error(`Error: ventas.for${type} no es un array`, this.ventas);
      return;
    }

    doc.text(title, 10, 10);
    autoTable(doc, { head: [columns], body: rows, startY: 20 });
    doc.save(`${title.toLowerCase().replace(/\s+/g, '-')}.pdf`);
  }
}
