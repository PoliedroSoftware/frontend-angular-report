import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PaymentMethodReport } from './payment-method-report';
//import { HEROES } from './mock-heroes';
import { PaymentMethodService } from '@services/payment-method.service';
import { environment } from '@environments/environment';
@Component({
  selector: 'app-ventas-medios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-method-report.component.html',
  styleUrl: './payment-method-report.component.css',
})
export class PaymentMethodComponent implements OnInit {
  utilidades: Array<any> = [];
  miArray: any[][] = [];
  varPagination: any = environment.paginationVar;

  valor1: any = 1;
  valor2: any = 2;
  arrayPages: [] = [];

  ventas_medios: any;
  totalAnio: any;
  totalMes: any;
  totalDia: any;

  constructor(private ventasMediosService: PaymentMethodService) {}

  ngOnInit() {
    // Agrupar data2 por año y mes

    this.getPaymenMethod(1, this.varPagination);
  }

  getPaymenMethod(valor1: any, valor2: any): void {
    this.ventasMediosService
      .getPaymenMethod(valor1, valor2)
      .subscribe((response) => {
        this.ventas_medios = response;
      });
  }
}
