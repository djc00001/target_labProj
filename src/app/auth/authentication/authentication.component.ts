import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'target-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
  }

  public onSubmit(data: NgForm) {
    console.log("Button clicked");
    console.log(data);

    this.auth.signUp(data.value.email, data.value.password).subscribe(
      data => {
        console.log(data);
      }
    );

    this.auth.signIn(data.value.email, data.value.password).subscribe(
      data => {
        console.log(data);
      }
    );

    data.reset();
  }
}
