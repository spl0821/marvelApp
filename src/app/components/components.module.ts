import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CharacterComponent } from './character/character.component';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TopBarComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ReactiveFormsModule
  ],
  exports: [TopBarComponent, CharacterComponent]
})
export class ComponentsModule { }
