import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { BlackHistoryComponent } from './Routing/black-history.component';
import { HomeLayoutComponent } from './Routing/home-layout.component';
import { EasterRouteComponent } from './Routing/easter-route.component';
import { WomenRouteComponent } from './Routing/women-route.component';
import { GroceryRouteComponent } from './Routing/grocery-route.component';
import { MenRouteComponent } from './Routing/men-route.component';

const routes: Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'Black-History', component: BlackHistoryComponent},
  {path: 'Easter', component: EasterRouteComponent},
  {path: 'Women', component: WomenRouteComponent},
  {path: 'Grocery', component: GroceryRouteComponent},
  {path: 'Men', component: MenRouteComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
