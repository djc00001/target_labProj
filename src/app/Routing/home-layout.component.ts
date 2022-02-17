import { Component } from "@angular/core";
import { circular_cards_list } from "../FeaturedCat Circular Cards/circular_cards_list";
import { BoxcardCompModel } from "../homepagead/boxcard_comp.model";
import { mock_boxcard_list } from "../homepagead/mock_boxcard_list";

@Component({
    selector: 'home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent {
    boxcards: BoxcardCompModel [] = [];
    circular_cards_list: any = circular_cards_list;
  
    constructor() {
      for(var boxcard_comp of mock_boxcard_list){
        console.log(boxcard_comp);
        this.boxcards.push(boxcard_comp)
      }
    }
}