import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {AuthGuardService} from './services/core/auth-guard.service';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('app/pages/pages.module')
      .then(m => m.PagesModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
