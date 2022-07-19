import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() BikesName?: Content;
  constructor() { }

  ngOnInit(): void {
    if (this.BikesName) {
      console.log("Bikes title: ", this.BikesName.title);
    }
  }
  printConsole(){
    console.log(this.BikesName?.author);
    console.log(this.BikesName?.id);
  }


}