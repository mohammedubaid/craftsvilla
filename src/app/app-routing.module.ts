import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { 
      	path: '',
        redirectTo: '/products',
        pathMatch: 'full'
      },
      { 
      	path: 'products',  
      	component: ProductlistComponent 
      },
      { 
      	path: 'product/:id', 
      	component: ProductdetailsComponent 
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }