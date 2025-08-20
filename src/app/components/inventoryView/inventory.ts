
export interface Inventarios {
  sku: string;               
  name: string;
  presentation: string;      
  cost: string;
  sale: string;
  inventory: number;
  percentage: number;
  subtotal_Cost: number;    
  subtotal_sale: number;


  saleFormatted?: string;
  costFormatted?: string;
  subtotalSaleFormatted?: string;
  subtotalCostFormatted?: string;
}
