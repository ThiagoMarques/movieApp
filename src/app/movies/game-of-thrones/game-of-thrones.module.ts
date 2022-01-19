import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameOfThronesPageRoutingModule } from './game-of-thrones-routing.module';

import { GameOfThronesPage } from './game-of-thrones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameOfThronesPageRoutingModule
  ],
  declarations: [GameOfThronesPage]
})
export class GameOfThronesPageModule {}
