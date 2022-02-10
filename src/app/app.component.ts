import { Component } from '@angular/core';
import { BoxcardCompModel } from './homepagead/boxcard_comp.model';
import { mock_boxcard_list } from './homepagead/mock_boxcard_list';
import { circular_cards_list } from './FeaturedCat Circular Cards/circular_cards_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'target-labProj';
  boxcards: BoxcardCompModel [] = [];
  circular_cards_list: any = circular_cards_list;

  constructor() {
    for(var boxcard_comp of mock_boxcard_list){
      console.log(boxcard_comp);
      this.boxcards.push(boxcard_comp)
    }
  }
}
