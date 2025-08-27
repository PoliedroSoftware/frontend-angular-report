import { Injectable } from '@angular/core';
import { Utility } from './utility';
import { UtilityService } from '@services/utility.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '@environments/environment';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-utilidad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './utility-view.component.html',
  styleUrl: './utility-view.component.css',
})
export class UtilityComponent  implements OnInit, OnDestroy {
  utility: any;

  valor1: any = 1;
  valor2: any = 2;
  arrayPages: [] = [];
  Resultados: number = 0;
  varPaginacion: any = environment.paginationVar;
   private destroy$ = new Subject<void>();

  constructor(
    private utilityService: UtilityService,
   
  ) {
   
  }

 

  ngOnInit() {
    this.getUtility(1, this.varPaginacion);
  }

  getUtility(valor1: any, valor2: any): void {
    this.utilityService.getUtility(valor1, valor2).pipe(takeUntil(this.destroy$) ).subscribe((response) => {
      this.utility = response;
    });
  }

  ngOnDestroy() {
  this.destroy$.next();   
  this.destroy$.complete();
}
}
