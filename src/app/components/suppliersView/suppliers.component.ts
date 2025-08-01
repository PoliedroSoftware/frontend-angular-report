import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SuppliersService } from '@services/suppliers.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.css',
})
export class SuppliersComponent {
  // Ejemplo. Luego se debe reemplazar estos datos por los que se obtengan de la API. Traer los datos desde la tabla.
  data = [
    { proveedor: 'NAME', saldo: '77.831.294' },
    { proveedor: 'NAME', saldo: '77.831.294' },
    { proveedor: 'NAME', saldo: '77.831.294' },
    { proveedor: 'NAME', saldo: '77.831.294' },
    { proveedor: 'NAME', saldo: '77.831.294' },
    { proveedor: 'NAME', saldo: '77.831.294' },
    { proveedor: 'NAME', saldo: '77.831.294' },
  ];

  data2 = [
    {
      fecha: '2025-01-22 00:00:00',
      proveedor: 'NAME',
      asesor: 'NAME',
      factura: '77.831.294',
      saldo: '77.831.294',
    },
    {
      fecha: '2025-01-22 00:00:00',
      proveedor: 'NAME',
      asesor: 'NAME',
      factura: '77.831.294',
      saldo: '77.831.294',
    },
    {
      fecha: '2025-01-22 00:00:00',
      proveedor: 'NAME',
      asesor: 'NAME',
      factura: '77.831.294',
      saldo: '77.831.294',
    },
    {
      fecha: '2025-01-22 00:00:00',
      proveedor: 'NAME',
      asesor: 'NAME',
      factura: '77.831.294',
      saldo: '77.831.294',
    },
    {
      fecha: '2025-01-22 00:00:00',
      proveedor: 'NAME',
      asesor: 'NAME',
      factura: '77.831.294',
      saldo: '77.831.294',
    },
    {
      fecha: '2025-01-22 00:00:00',
      proveedor: 'NAME',
      asesor: 'NAME',
      factura: '77.831.294',
      saldo: '77.831.294',
    },
    {
      fecha: '2025-01-22 00:00:00',
      proveedor: 'NAME',
      asesor: 'NAME',
      factura: '77.831.294',
      saldo: '77.831.294',
    },
    {
      fecha: '2025-01-22 00:00:00',
      proveedor: 'NAME',
      asesor: 'NAME',
      factura: '77.831.294',
      saldo: '77.831.294',
    },
    {
      fecha: '2025-01-22 00:00:00',
      proveedor: 'NAME',
      asesor: 'NAME',
      factura: '77.831.294',
      saldo: '77.831.294',
    },
  ];

  proveedores: Array<any> = [];
  miArray: any[][] = [];
  varPaginacion: any = environment.paginationVar;
  valor1: any = 1;
  valor2: any = 2;
  arrayPages: [] = [];

  ventas_medios: any;
  totalAnio: any;
  totalMes: any;
  totalDia: any;

  constructor(private suppliersService: SuppliersService) {}

  ngOnInit() {
    // Agrupar data2 por año y mes

    this.getSupplierService(1, this.varPaginacion);
  }

  getSupplierService(valor1: any, valor2: any): void {
    this.proveedores = [];
    this.suppliersService.getSuppliers(valor1, valor2).subscribe((result) => {
      result.forEach((dato:any) => this.proveedores.push(dato));
    });
  }
}
