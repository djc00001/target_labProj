import { Component, OnInit } from '@angular/core';
import { BoxcardService } from '../boxcards.service';
import { BoxcardCompModel } from '../boxcard_comp.model';

@Component({
  selector: 'fm-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  constructor(private ps:BoxcardService) { }

  ngOnInit(): void {
  }

  addBoxcard(boxcard:BoxcardCompModel) {
    this.ps.addBoxcard(boxcard);
  }

}
