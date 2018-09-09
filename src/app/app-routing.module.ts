import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { ScHomeComponent } from './sc-home/sc-home.component';
import { ScRegisterComponent } from './sc-register/sc-register.component';
import { ScDashboardComponent } from './sc-dashboard/sc-dashboard.component';
import { AuthGuard } from './services/authguard.service';

const appRoutes: Routes = [
   { path: '', component: ScHomeComponent },
   { path: 'dashboard', canActivate: [AuthGuard], component: ScDashboardComponent },
   { path: '**', redirectTo: '/' }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
