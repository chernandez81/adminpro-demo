import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress', {static: false}) txtProgress: ElementRef;
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { 
  }

  ngOnInit() {
  }

  onChanges( evento: number ){
   //let elemHTML: any = document.getElementsByName('porcentaje') [0];

    if(evento >= 100){ this.porcentaje = 100; }
    else if(evento <=0){ this.porcentaje = 0; }
    else { this.porcentaje = evento; }
    
    //elemHTML.value = this.porcentaje;
    this.txtProgress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit( this.porcentaje );
  }

  cambiarValor(valor) {

    if(this.porcentaje <= 0 && valor <0) {
      this.porcentaje = 0;
      return;
    }

   if(this.porcentaje>=100 && valor>0){
     this.porcentaje = 100;
     return;
   } 
     
    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit( this.porcentaje );

    this.txtProgress.nativeElement.focus();
  }
}
