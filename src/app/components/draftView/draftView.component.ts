import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '@environments/environment';
import { DraftService } from '@services/draft.service';
@Component({
  selector: 'app-draft',
  imports: [CommonModule],
  templateUrl: './draftView.component.html',
  styleUrl: './draft.component.css'
})
export class DraftViewComponent {
  varPagination:any=environment.paginationVar;
    draft:any;
    
    valor1:any=1
    valor2:any=2;
    arrayPages:[]=[];
    Resultados:number=0;
   

  
    constructor(private draftService: DraftService ) { }

    ngOnInit() {
    // Agrupar data2 por año y mes
   
    this.getDraft(1, this.varPagination); 
   
  }

    
  getDraft(valor1:any, valor2:any): void {
         this.draftService.getDraft(valor1, valor2).subscribe(response => {
         this.draft = response;  
         console.log(this.draft);   
     })

   };



            // Ejemplo. Luego se debe reemplazar estos datos por los que se obtengan de la API. Traer los datos desde la tabla.
            // Datos mockiados mientras se hace el backend y la api
  data = [
    { Fecha: "13-09/2022", Referencia:122222, Cliente: '77.831.294',  Total:'qwerty' },
    { Fecha: "14/05/2019", Referencia:122222,  Cliente: '77.831.294', Total:12233333 },
    { Fecha: "19/07/2017", Referencia:122222,  Cliente: '77.831.294', Total:78937341 },
    { Fecha: "21/07/2023", Referencia:122222,  Cliente: '97.831.294', Total:12233333 },
    { Fecha: "23/08/2015", Referencia:122222,  Cliente: '77.831.294', Total:12233333 },
    { Fecha: "20/03/2019", Referencia:122222,  Cliente: '100.831.294', Total:12233333 },
    { Fecha: "31/04/2031", Referencia:122222,  Cliente: '56.831.294', Total:12233333 },
    { Fecha: "1//02/2001", Referencia:122222,  Cliente: '49.831.294', Total:12233333 }
];



  data2 = [
    { Fecha: "13-09/2022", Codigo:333, Precio:13000, Producto:'xxxxxxx',  Cantidad:4, Referencia:122222, Cliente: '77.831.294',  Total:'qwerty' },
    { Fecha: "14/05/2019", Codigo:333, Precio:13000, Producto:'xxxxxxx',  Cantidad:4, Referencia:122222,  Cliente: '77.831.294', Total:12233333 },
    { Fecha: "19/07/2017", Codigo:334, Precio:13000, Producto:'xxxxxxx',  Cantidad:4, Referencia:122222,  Cliente: '77.831.294', Total:78937341 },
    { Fecha: "21/07/2023", Codigo:335, Precio:13000, Producto:'xxxxxxx',  Cantidad:4, Referencia:122222,  Cliente: '97.831.294', Total:12233333 },
    { Fecha: "23/08/2015", Codigo:335, Precio:13000, Producto:'xxxxxxx',  Cantidad:4, Referencia:122222,  Cliente: '77.831.294', Total:12233333 },
    { Fecha: "20/03/2019", Codigo:335, Precio:14000, Producto:'xxxxxxx',  Cantidad:4, Referencia:122222,  Cliente: '100.831.294', Total:12233333 },
    { Fecha: "31/04/2031", Codigo:337, Precio:15000, Producto:'xxxxxxx',  Cantidad:4, Referencia:122222,  Cliente: '56.831.294', Total:12233333 },
    { Fecha: "1//02/2001",  Codigo:344,Precio:14500, Producto:'xxxxxxx',  Cantidad:4, Referencia:122222,  Cliente: '49.831.294', Total:12233333 }
];




}
