import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() public palabras: Array<string>;

  public palabraNueva: string;
  public refrescarCampos: any;
  
  public agregarPalabra(palabra:string) {
    this.palabras.push(palabra);
    this.palabraNueva = "";
    this.refrescarCampos();
  }
}
