import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatsPageRoutingModule } from './cats-routing.module';

import { CatsPage } from './cats.page';
import { ComponentsModuleModule } from '../../components/components-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatsPageRoutingModule,
    ComponentsModuleModule
  ],
  declarations: [CatsPage]
})
export class CatsPageModule {}
