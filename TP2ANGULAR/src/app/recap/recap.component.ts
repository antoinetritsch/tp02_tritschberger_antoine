import { Component, Input, OnInit } from '@angular/core';
import User from '../User';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {
  @Input() user  = new User("","",0,0);

  constructor() { }

  ngOnInit(): void {
  }

}
