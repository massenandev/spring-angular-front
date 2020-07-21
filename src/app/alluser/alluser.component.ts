import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent implements OnInit {

  users: any;

  constructor(private service: UserServiceService) { }

  ngOnInit(): void {
    let response = this.service.findAllUser();
    response.subscribe(data=>this.users = data);
  }

  public deleteUser(username: string){
    let response = this.service.deleteUser(username);
    response.subscribe(data=> this.users = data);
  }

}
