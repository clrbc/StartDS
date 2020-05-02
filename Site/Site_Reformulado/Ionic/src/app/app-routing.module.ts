import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'bebidas', loadChildren: './bebidas/bebidas.module#BebidasPageModule' },
  { path: 'lanches', loadChildren: './lanches/lanches.module#LanchesPageModule' },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'sobremesa', loadChildren: './sobremesa/sobremesa.module#SobremesaPageModule' },
  { path: 'acompanhamentos', loadChildren: './acompanhamentos/acompanhamentos.module#AcompanhamentosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
