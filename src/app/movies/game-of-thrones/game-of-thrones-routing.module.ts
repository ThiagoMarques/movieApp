import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameOfThronesPage } from './game-of-thrones.page';

const routes: Routes = [
  {
    path: '',
    component: GameOfThronesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameOfThronesPageRoutingModule {}
