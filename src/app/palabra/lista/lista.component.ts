import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PalabraInput } from 'src/model/palabraInput.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  constructor() {
    this.refrescaCampos = new EventEmitter();
  }

  @Input('valores') public palabras: Array<string>;

  @Input() public inputPalabras: PalabraInput;

  @Output() public refrescaCampos:EventEmitter<string>;

  ngOnInit() {}

}
