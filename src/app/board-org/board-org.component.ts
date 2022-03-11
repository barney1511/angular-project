import { Component, OnInit } from '@angular/core';
import {UserService} from "../_services/user.service";

@Component({
  selector: 'app-board-org',
  templateUrl: './board-org.component.html',
  styleUrls: ['./board-org.component.css']
})
export class BoardOrgComponent implements OnInit {
  content?: string;
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getOrgBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
