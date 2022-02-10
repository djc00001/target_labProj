import { Component, Input } from "@angular/core";

@Component({
    selector: "target-valentines-boxcard",
    templateUrl: "valentine.boxcard.component.html",
    styleUrls: ["valentine.boxcard.component.css"]
})
export class ValentinesBoxCard {
    @Input() img: string;
    @Input() title: string;
    @Input() description: string;

    constructor(){
        this.img = "";
        this.title = "";
        this.description = "";
    }

}