import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  constructor() {
    this.inputPalabras = new Array<{verified:boolean, t1: Date, t2:Date, valor:string}>();
   }

  @Input() public palabras: Array<string>;

  public palabrasEnIngles = ["dog", "cat", "fish", "pencil", "chair"];
  public inputPalabras: Array<{verified:boolean, t1: Date, t2:Date, valor:string}>;

  public colorearPalabra(palabra) {
    if (this.palabrasEnIngles.indexOf(palabra) !== -1) {
      return "blue";
    }
    return "green";
  }

  refreshInputs() {
    for (let i = 0; i < this.inputPalabras.length; i++) {
      this.inputPalabras[i] = {
        verified: false,
        t1: undefined,
        t2: undefined,
        valor: ''
      };
    }
  }

  verificar(i) {
    if (this.palabras[i] === this.inputPalabras[i].valor ) {
      this.inputPalabras[i].verified = true;
      this.inputPalabras[i].t2 = new Date();
      return true;
    }
    return false;
  }

  inicializarContador(evento, i) {
    if (!this.inputPalabras[i].t1) {
      this.inputPalabras[i].t1 = new Date();
    }
  }

  getTiempo(i) {
    let palabra = this.inputPalabras[i];
    if (palabra.t1 && palabra.t2) {
      return palabra.t2.getTime() - palabra.t1.getTime();
    }
    return 0;
  }

  public refrescarCampos(): void {
    for (let i = 0; i < this.palabras.length; i++) {
      this.inputPalabras[i] = {
        verified: false,
        t1: undefined,
        t2: undefined,
        valor: ''
      };
    }
  }

  ngOnInit() {
    this.refrescarCampos();
  }

}
