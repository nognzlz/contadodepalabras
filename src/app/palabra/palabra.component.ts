import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-palabra',
  templateUrl: './palabra.component.html',
  styleUrls: ['./palabra.component.css']
})
export class PalabraComponent implements OnInit {

  public palabras: Array<string>;
  public palabraNueva;

  

  public diccionario = {
    dog: "perro",
    cat: "gato",
    fish: "pez",
    pencil: "lapiz"
  }

  constructor() {
    this.palabras = ["dog", "gato", "zapatilla", "hola"];
  }

  traducir(palabra) {
    let index = this.palabras.indexOf(palabra);

    let palabraTraducida = this.diccionario[palabra];

    this.palabras[index] = palabraTraducida;
  }

  ngOnInit() {}

}
