import { Injectable } from "@angular/core";
import { BoxcardCompModel } from "./boxcard_comp.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})
export class BoxcardService {
    private baseUrl: string = 'https://target-labproj-default-rtdb.firebaseio.com/';
    private boxcardEndPoint: string = 'boxcards.json';

    constructor(private db:AngularFireDatabase) {

    }

    public getBoxcards(){
        return this.db.list<BoxcardCompModel>("boxcards").valueChanges();
    }

    public getBoxcard(index:number){
        return this.db.list("boxcards", ref => ref.orderByChild("title").startAt(10)).valueChanges();
    }

    addBoxcard(boxcard:BoxcardCompModel) {
        this.db.list<BoxcardCompModel>("boxcards").push(boxcard);
    }
}