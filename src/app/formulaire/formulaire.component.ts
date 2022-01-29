import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import User from '../User';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  user : User = new User("","",0,"","",0,"","","","","");
  @Output() data = new EventEmitter<User>();

  constructor() { 
  }

  ngOnInit(): void { 
  }

  onClick(): void{
    if(this.user.IsCorrect()==''){
      this.data.emit(this.user);
    }
  }
}
