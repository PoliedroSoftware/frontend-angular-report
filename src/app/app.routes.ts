import { Routes } from '@angular/router';
import { UtilityComponent } from '@components/utility-view/utility-view.component';
import { SuppliersComponent } from '@components/suppliersView/suppliers.component';
import { InventoryComponent } from '@components/inventoryView/inventory.component';
import { SalesComponent } from '@components/salesView/sales.component';
import { PaymentMethodComponent } from '@components/payment-method-report/payment-method-report.component';
import { BorradoresComponent } from '@components/borradoresView/borradores.component';
import { DraftViewComponent } from '@components/draftView/draftView.component';
import { PruebaAuthComponent } from '@components/prueba-auth/prueba-auth.component';


export const routes: Routes = [
 // { path: 'utilidad', component: UtilidadComponent },
  { path: 'suppliers', component: SuppliersComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'sales', component: SalesComponent  },
  { path: 'payment-method', component: PaymentMethodComponent},
  { path: 'borrador', component: BorradoresComponent },
  { path: 'draft', component:  DraftViewComponent  },
  { path: 'utility', component:  UtilityComponent  },
  { path: '',        component:  PruebaAuthComponent },

];
