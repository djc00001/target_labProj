import { Component } from '@angular/core';
import { BoxcardCompModel } from './homepagead/boxcard_comp.model';
import { mock_boxcard_list } from './homepagead/mock_boxcard_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'target-labProj';
  boxcards: BoxcardCompModel [] = [];

  constructor() {
    for(var boxcard_comp of mock_boxcard_list){
      console.log(boxcard_comp);
      this.boxcards.push(boxcard_comp)
    }
  }
}
