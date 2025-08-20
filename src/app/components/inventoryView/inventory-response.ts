
import { Inventarios } from './inventory';
export interface InventoryResponse {

    forDay: Inventarios[];
    forMonth: Inventarios[];
    forYear: Inventarios[];
}
