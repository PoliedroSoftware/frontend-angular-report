
import { Inventarios } from './inventory';
export interface InventoryResponse {
    data: Inventarios[];
    totalPages: number;
    totalRows: number;
}
