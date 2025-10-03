import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { FormsModule } from '@angular/forms';
import { HeroesFilterPipe } from './heroes/heroes-filter.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { CinepolisComponent } from './formularios/cinepolis/cinepolis.component';
//import { OperacionesResistenciasComponent } from './formularios/operaciones-resistencias/operaciones-resistencias.component';
import { ResistenciasComponent } from './formularios/resistencias/resistencias.component';
import { ExtraComponent } from './formularios/extra/extra.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesFilterPipe,
    OperasBasComponent,
    CinepolisComponent,
    //OperacionesResistenciasComponent,
    ResistenciasComponent,
    ExtraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
