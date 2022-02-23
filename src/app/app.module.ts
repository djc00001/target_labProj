import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CircularCard } from './FeaturedCat Circular Cards/circular.card.component';
import { TopLeftSideComponent } from './header/leftside.component';
import { TopNavBarComponent } from './header/topnavbar.component';
import { TopRightSideComponent } from './header/toprightside.component';
import { ValentinesAd } from './homepagead/valentine.ad.component';
import { ValentinesBoxCard } from './homepagead/valentine.boxcard.component';
import { SecondaryLeftSideComponent } from './secondary header/secondary.leftside.component';
import { SecondaryRightSideComponent } from './secondary header/secondary.rightside.component';
import { SecondaryNavBarComponent } from './secondary header/secondarynavbar.component';
import { AppRoutingModule } from './app-routing.module';
import { BlackHistoryComponent } from './Routing/black-history.component';
import { HomeLayoutComponent } from './Routing/home-layout.component';
import { EasterRouteComponent } from './Routing/easter-route.component';
import { WomenRouteComponent } from './Routing/women-route.component';
import { GroceryRouteComponent } from './Routing/grocery-route.component';
import { MenRouteComponent } from './Routing/men-route.component';
import { GroceryBoxAd } from './GroceryPage/grocery.box.ad.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopLeftSideComponent,
    TopRightSideComponent,
    SecondaryLeftSideComponent,
    SecondaryRightSideComponent,
    SecondaryNavBarComponent,
    CircularCard,
    ValentinesAd,
    ValentinesBoxCard,
    BlackHistoryComponent,
    HomeLayoutComponent,
    EasterRouteComponent,
    WomenRouteComponent,
    GroceryRouteComponent,
    MenRouteComponent,
    GroceryBoxAd
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
