import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'flash',
    loadChildren: () => import('./movies/flash/flash.module').then( m => m.FlashPageModule)
  },
  {
    path: 'game-of-thrones',
    loadChildren: () => import('./movies/game-of-thrones/game-of-thrones.module').then( m => m.GameOfThronesPageModule)
  },
  {
    path: 'data-movie',
    loadChildren: () => import('./data-movie/data-movie.module').then( m => m.DataMoviePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
