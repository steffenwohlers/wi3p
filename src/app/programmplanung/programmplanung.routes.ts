import { Routes } from '@angular/router';
import { ProgrammplanungFahrradStartComponent } from './programmplanung-fahrrad-start/programmplanung-fahrrad-start.component';
import { ProgrammplanungFahrradOutputComponent } from './programmplanung-fahrrad-output/programmplanung-fahrrad-output.component';

export const PROGRAMMPLANUNG_ROUTES: Routes = [
    { path: '', component: ProgrammplanungFahrradStartComponent},
    { path: ':id', component: ProgrammplanungFahrradOutputComponent}
];
