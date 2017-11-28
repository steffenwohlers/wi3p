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
import { ProgrammplanungInputComponent } from './programmplanung/programmplanung-input/programmplanung-input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProgrammplanungComponent,
    StuecklisteComponent,
    HeaderComponent,
    StuecklisteItemComponent,
    TestTabComponent,
    ProgrammplanungInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [FahrradService],
  bootstrap: [AppComponent]
})
export class AppModule { }
