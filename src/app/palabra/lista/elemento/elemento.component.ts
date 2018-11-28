import { Component, OnInit, Input } from '@angular/core';
import { PalabraInput } from 'src/model/palabraInput.model';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html',
  styleUrls: ['./elemento.component.css']
})
export class ElementoComponent implements OnInit {

  constructor() { }

  @Input() public input: PalabraInput;
  @Input() public palabra: string;

  ngOnInit() {
  }

  public colorearPalabra() {
    return this.estaEnIngles() ? 'blue' : 'green';
  }

  public estaEnIngles():boolean {
    return Object.keys(this.diccionario).indexOf(this.palabra) > -1;
  }

  public diccionario = {
    dog: "perro",
    cat: "gato",
    fish: "pez",
    pencil: "lapiz",
    pen: "lapicera"
  }

  public traducir() {
    let palabraTraducida = this.diccionario[this.palabra];

    this.palabra = palabraTraducida;
  }

  public verificar() {
    if (this.palabra === this.input.valor ) {
      this.input.verified = true;
      this.input.t2 = new Date();
      return true;
    }
    return false;
  }

  public getTiempo() {
    debugger;
    let palabra = this.input;
    if (palabra.t1 && palabra.t2) {
      return palabra.t2.getTime() - palabra.t1.getTime();
    }
    return 0;
  }

  public inicializarContador(evento) {
    if (!this.input.t1) {
      this.input.t1 = new Date();
    }
  }

}
