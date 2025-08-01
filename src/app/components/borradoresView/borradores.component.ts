import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-borradores',
  imports: [CommonModule],
  templateUrl: './borradores.component.html',
  styleUrl: './borradores.component.css'
})
export class BorradoresComponent {
  data: {
  fecha: string;
  referencia: string;
  cliente: string;
  total: string;
}[] = [
   { fecha: "01/02/12", referencia: '77.831.294', cliente: '284.598.893', total: '261.216.464' },
];

  data2 = [
    { fecha: '2021-12-02', codigo: 'XYZ789', producto: 'Producto B', precio: 150, cantidad: 3, subtotal: 450, cliente: 'Cliente Y', referencia: 'Ref2' },
    { fecha: '2021-12-03', codigo: 'LMN456', producto: 'Producto C', precio: 200, cantidad: 1, subtotal: 200, cliente: 'Cliente Z', referencia: 'Ref3' },
    { fecha: '2021-12-04', codigo: 'DEF012', producto: 'Producto D', precio: 300, cantidad: 4, subtotal: 1200, cliente: 'Cliente W', referencia: 'Ref4' },
    { fecha: '2021-12-05', codigo: 'GHI345', producto: 'Producto E', precio: 250, cantidad: 2, subtotal: 500, cliente: 'Cliente V', referencia: 'Ref5' }
  ];
}
