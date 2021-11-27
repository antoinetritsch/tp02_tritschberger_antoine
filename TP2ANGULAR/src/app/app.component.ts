import { Component } from '@angular/core';
import User from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP2ANGULAR';

  user=new User("","",0,0);
  submit(u2:User):void{
    this.user=u2;
  }
}
