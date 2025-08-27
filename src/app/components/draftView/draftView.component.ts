import { CommonModule } from '@angular/common';
import { environment } from '@environments/environment';
import { DraftService } from '@services/draft.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-draft',
  imports: [CommonModule],
  templateUrl: './draftView.component.html',
  styleUrl: './draft.component.css',
})
export class DraftViewComponent implements OnInit, OnDestroy {
  varPagination: any = environment.paginationVar;
  draft: any;

  valor1: any = 1;
  valor2: any = 2;
  arrayPages: [] = [];
  Resultados: number = 0;
  private destroy$ = new Subject<void>();
  constructor(
    private draftService: DraftService,
    
  ) {
    
    
  }


  ngOnInit() {
    this.getDraft(1, this.varPagination);
  }

  getDraft(valor1: any, valor2: any): void {
    this.draftService.getDraft(valor1, valor2).pipe(takeUntil(this.destroy$)) .subscribe((response) => {
      this.draft = response;
      console.log(this.draft);
    });
  }


  ngOnDestroy() {
  this.destroy$.next();   
  this.destroy$.complete();
}



}
