import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserInfo } from './user-info';

@Component({
  selector: 'target-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  myInfo: UserInfo | undefined;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    console.log("Sending get request");
    this.showUserInfo();
  }

  getUserInfo(){
    return this.http.get<UserInfo>("https://target-labproj-default-rtdb.firebaseio.com/my-info.json")
  }

  showUserInfo(){
    this.getUserInfo().subscribe((data: UserInfo) => {
      console.log(data);
      this.myInfo = data;
    })
  }
}
