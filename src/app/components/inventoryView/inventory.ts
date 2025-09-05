
export interface Inventarios {
  sku: string;               
  name: string;
  presentation: string;      
  cost: number;              // Cambiado de string a number
  sale: number;              // Cambiado de string a number
  inventory: number;
  percentage: number;
  subtotal_Cost: number;    
  subtotal_sale: number;

  saleFormatted?: string;
  costFormatted?: string;
  subtotalSaleFormatted?: string;
  subtotalCostFormatted?: string;
}
