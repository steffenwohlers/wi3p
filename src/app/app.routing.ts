import { Routes, RouterModule } from '@angular/router';
import { ProgrammplanungComponent } from './programmplanung/programmplanung.component';
import { StuecklisteComponent } from './stueckliste/stueckliste.component';
import { TestTabComponent } from './test-tab/test-tab.component';
import { ProduktionsplanungComponent } from './produktionsplanung/produktionsplanung.component';
import { ParameterComponent } from './parameter/parameter.component';
import { ScInboundComponent } from './sc-inbound/sc-inbound.component';
import { ReportingComponent } from './reporting/reporting.component';



const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/programmplanung', pathMatch: 'full'},
    { path: 'programmplanung', component: ProgrammplanungComponent},
    { path: 'stueckliste', component: StuecklisteComponent},
    { path: 'testtab', component: TestTabComponent},
    { path: 'produktionsplanung', component: ProduktionsplanungComponent},
    { path: 'parameter', component: ParameterComponent},
    { path: 'sc-inbound', component: ScInboundComponent},
    { path: 'reporting', component: ReportingComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
