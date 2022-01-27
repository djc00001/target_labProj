import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopLeftSideComponent } from './header/leftside.component';
import { TopNavBarComponent } from './header/topnavbar.component';
import { TopRightSideComponent } from './header/toprightside.component';
import { SecondaryLeftSideComponent } from './secondary header/secondary.leftside.component';
import { SecondaryRightSideComponent } from './secondary header/secondary.rightside.component';
import { SecondaryNavBarComponent } from './secondary header/secondarynavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopLeftSideComponent,
    TopRightSideComponent,
    SecondaryLeftSideComponent,
    SecondaryRightSideComponent,
    SecondaryNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
