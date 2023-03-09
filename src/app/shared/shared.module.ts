import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FormComponent } from '../components/form/form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    NavBarComponent,
    FormComponent,
  ],
  exports:[NavBarComponent,FormComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
  ]
})
export class SharedModule { }
