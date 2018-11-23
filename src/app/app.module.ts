import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PalabraComponent } from './palabra/palabra.component';
import { AgregarComponent } from './palabra/agregar/agregar.component';
import { ListaComponent } from './palabra/lista/lista.component';
import { ElementoComponent } from './palabra/lista/elemento/elemento.component';

@NgModule({
  declarations: [
    AppComponent,
    PalabraComponent,
    AgregarComponent,
    ListaComponent,
    ElementoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
