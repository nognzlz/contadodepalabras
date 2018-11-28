import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-palabra',
  templateUrl: './palabra.component.html',
  styleUrls: ['./palabra.component.css']
})
export class PalabraComponent implements OnInit {
  
  public palabras: Array<string>;
  public palabraNueva;
  public inputPalabras: Array<{verified:boolean, t1: Date, t2:Date, valor:string}>;
  
  public refrescarCampos() {
    this.inputPalabras = this.palabras.map(function() {
      return {
        verified: false,
        t1: undefined,
        t2: undefined,
        valor: ''
      }
    })
  };

  constructor() {
    this.palabras = ["dog", "gato", "zapatilla", "hola"];
    this.refrescarCampos();
  }

  ngOnInit() {}

}
