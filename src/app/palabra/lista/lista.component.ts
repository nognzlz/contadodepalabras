import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  constructor() {}

  @Input('valores') public palabras: Array<string>;

  @Input() public inputPalabras: {verified:boolean, t1: Date, t2:Date, valor:string};

  public diccionario = {
    dog: "perro",
    cat: "gato",
    fish: "pez",
    pencil: "lapiz"
  }

  public estaEnIngles(palabra):boolean {
    return Object.keys(this.diccionario).indexOf(palabra) > -1;
  }

  public colorearPalabra(palabra) {
    return this.estaEnIngles(palabra) ? 'blue' : 'green';
  }

  traducir(palabra) {
    let index = this.palabras.indexOf(palabra);

    let palabraTraducida = this.diccionario[palabra];

    this.palabras[index] = palabraTraducida;
  }

  public walter() {

    let hijoDeWalter = function(parametro) {
      return hijo2DeWalter;
    }

    let hijo2DeWalter = function() {
      return "soy el hijo2 de walter";
    }

    console.log("soy walter");
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

  ngOnInit() {}

}
