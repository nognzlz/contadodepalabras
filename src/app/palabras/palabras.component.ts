import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palabras',
  templateUrl: './palabras.component.html',
  styleUrls: ['./palabras.component.css']
})
export class PalabrasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public palabras:Array<string> = ["hola", "mundo"];
  public inputs:Array<any> = [{value: "", disabled: false, t1:null}, {value: ""}];

  public validarPalabra($event, index) {
    let palabra = this.palabras[index];
    let input = this.inputs[index];

    if (palabra === input.value) {
      input.disabled = true;
      input.t2 = new Date();
      //calcular el tiempo
      this.calcularTiempo(index);
    }
  }

  public inicializarT1(index) {
    let input = this.inputs[index];

    if (!input.t1) {
      input.t1 = new Date();
    }
  }

  public calcularTiempo(index) {
    let input = this.inputs[index];

    let result = input.t2.getTime() - input.t1.getTime();

    input.tiempo = result;

  }

}
