import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesComponent } from './jokes/jokes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [JokesComponent],
  declarations: [JokesComponent],
})
export class JokesModule { }