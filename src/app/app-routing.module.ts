import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'page',
    loadChildren: () => import( './pages/pages.module' ).then( m => m.PagesModule )
  },
  {
    path: '**',
    redirectTo: 'page'
  }
];

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
