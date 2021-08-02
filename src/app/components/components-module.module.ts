import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { CatComponent } from './cat/cat.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CatComponent
  ],
  exports:[
    HeaderComponent,
    CatComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModuleModule { }
