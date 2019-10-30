import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'pg-pergunta', redirectTo: 'home', pathMatch: 'full'  },
  { path: 'pg-pergunta/:categoria', loadChildren: './pg-pergunta/pg-pergunta.module#PgPerguntaPageModule' },
  { path: 'congratulations/:categoria', loadChildren: './congratulations/congratulations.module#CongratulationsPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
