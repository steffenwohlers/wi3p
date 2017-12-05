import { Routes, RouterModule } from '@angular/router';
import { ProgrammplanungComponent } from './programmplanung/programmplanung.component';
import { StuecklisteComponent } from './stueckliste/stueckliste.component';
import { TestTabComponent } from './test-tab/test-tab.component';
import { PROGRAMMPLANUNG_ROUTES } from './programmplanung/programmplanung.routes';


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/programmplanung', pathMatch: 'full'},
    { path: 'programmplanung', component: ProgrammplanungComponent, children: PROGRAMMPLANUNG_ROUTES},
    { path: 'stueckliste', component: StuecklisteComponent},
    { path: 'testtab', component: TestTabComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
