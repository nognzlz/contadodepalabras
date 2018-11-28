import { Component, OnInit } from '@angular/core';
import { PalabraInput } from 'src/model/palabraInput.model';

@Component({
  selector: '.app-palabra',
  templateUrl: './palabra.component.html',
  styleUrls: ['./palabra.component.css']
})
export class PalabraComponent implements OnInit {
  public palabras: Array<string>;
  public palabraNueva;
  public inputPalabras: Array<PalabraInput>;
  
  public refrescarCampos() {
    this.inputPalabras = this.palabras.map(function() {
      return new PalabraInput();
    })
  };

  constructor() {
    this.palabras = ["dog", "gato", "zapatilla", "hola"];
    this.refrescarCampos();
  }

  ngOnInit() {}

}
