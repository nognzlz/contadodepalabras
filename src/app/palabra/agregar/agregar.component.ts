import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor() {
    this.actualizarCampos = new EventEmitter();
  }

  ngOnInit() {
  }

  @Input() public palabras: Array<string>;
  @Output() public actualizarCampos:EventEmitter<string>;

  public palabraNueva: string;
  
  public agregarPalabra(palabra:string) {
    this.palabras.push(palabra);
    this.palabraNueva = "";
    this.actualizarCampos.emit('');
  }
}
