import { Venta } from './venta';
export interface VentasResponse {
  forDay: Venta[];
  forMonth: Venta[];
  forYear: Venta[];
}
