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
import { ProgrammplanungFahrradComponent } from './programmplanung/programmplanung-fahrrad/programmplanung-fahrrad.component';

// tslint:disable-next-line:max-line-length
import { ProgrammplanungInputFahrradComponent } from './programmplanung/programmplanung-fahrrad-input/programmplanung-fahrrad-input.component';
import { ProgrammplanungFahrradOutputComponent } from './programmplanung/programmplanung-fahrrad-output/programmplanung-fahrrad-output.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgrammplanungComponent,
    StuecklisteComponent,
    HeaderComponent,
    StuecklisteItemComponent,
    TestTabComponent,
    ProgrammplanungFahrradComponent,
    ProgrammplanungInputFahrradComponent,
    ProgrammplanungFahrradOutputComponent
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
