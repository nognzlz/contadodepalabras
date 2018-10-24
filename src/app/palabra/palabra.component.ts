import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-palabra',
  templateUrl: './palabra.component.html',
  styleUrls: ['./palabra.component.css']
})
export class PalabraComponent implements OnInit {

  palabras: Array<string> = ["perro", "gato", "zapatilla"];
  inputPalabras: Array<any> = [{}, {}, {}];

  constructor() { }

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

  ngOnInit() {
  }

}
