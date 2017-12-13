import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgrammplanungComponent } from './programmplanung/programmplanung.component';
import { StuecklisteComponent } from './stueckliste/stueckliste.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { StuecklisteItemComponent } from './stueckliste/stueckliste-item/stueckliste-item.component';
import { FahrradService } from './shared/fahrrad.service';
import { TestTabComponent } from './test-tab/test-tab.component';
import { FormsModule } from '@angular/forms';
import { FahrradTeilService } from './shared/fahrrad-teil.service';
import { ProduktionsplanungComponent } from './produktionsplanung/produktionsplanung.component';
import { ParameterComponent } from './parameter/parameter.component';
import { LieferdatenService } from './shared/lieferdaten.service';
import { ProduktionskapazitaetenService } from './shared/produktionskapazitaeten.service';

// tslint:disable-next-line:max-line-length


@NgModule({
  declarations: [
    AppComponent,
    ProgrammplanungComponent,
    StuecklisteComponent,
    HeaderComponent,
    StuecklisteItemComponent,
    TestTabComponent,
    ProduktionsplanungComponent,
    ParameterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    FahrradService,
    FahrradTeilService,
    LieferdatenService,
    ProduktionskapazitaetenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
