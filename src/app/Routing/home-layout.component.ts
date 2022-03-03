import { Component, OnInit } from "@angular/core";
import { circular_cards_list } from "../FeaturedCat Circular Cards/circular_cards_list";
import { BoxcardService } from "../homepagead/boxcards.service";
import { BoxcardCompModel } from "../homepagead/boxcard_comp.model";
import { mock_boxcard_list } from "../homepagead/mock_boxcard_list";

@Component({
    selector: 'home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit{
    boxcards: BoxcardCompModel [] = [];
    circular_cards_list: any = circular_cards_list;
  
    constructor(private service:BoxcardService) {
      
    }

  ngOnInit(): void {
    console.log("Fetch data");
    this.service.getBoxcards().subscribe(data => {
      console.log(data);
      for (var boxcard of data){
        this.boxcards.push(boxcard);
      }
    });
  }
}