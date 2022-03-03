import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BoxcardCompModel } from "./boxcard_comp.model";

@Injectable({
    providedIn: 'root'
})
export class BoxcardService {
    private baseUrl: string = 'https://target-labproj-default-rtdb.firebaseio.com/';
    private boxcardEndPoint: string = 'boxcards.json';

    constructor(private http:HttpClient) {

    }

    public getBoxcards(){
        return this.http.get<BoxcardCompModel []>(this.baseUrl + this.boxcardEndPoint);
    }

    public getBoxcard(index:number){
        return this.http.get<BoxcardCompModel>(this.baseUrl + 'products/' + index + '.json');
    }
}