import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})
export class RegistersComponent implements OnInit {

  user: User = new User("", "", 0, "", "");
  message: any;

  constructor(private service: UserServiceService){ }

  ngOnInit(): void{
  }

    public getRegister(){
      let response = this.service.getRegister(this.user);
      response.subscribe(data=> this.message=data);
    }
}
