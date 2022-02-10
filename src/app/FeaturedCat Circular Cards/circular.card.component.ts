import { Component, Input } from "@angular/core";

@Component({
    selector: "target-circular-category-card",
    templateUrl: "circular.card.component.html",
    styleUrls: ["circular.card.component.css"]
})
export class CircularCard {
    @Input() img: string;
    @Input() category: string;

    constructor(){
        this.img = "";
        this.category = "";
    }
}