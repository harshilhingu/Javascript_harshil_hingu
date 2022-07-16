import { Component } from '@angular/core';
import { Content } from './models/content';
import { List } from './models/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'H_Hingu_bikes';
  myList: List;

  constructor() {
    let contentitem: Content;
    this.myList = new List();

    contentitem = {
      id: 0,
      title: 'CBR 10000RR',
      body: "steel",
      imageLink: "https://cdni.autocarindia.com/ExtraImages/20200730063629_2020-Honda-CBR1000RR-R-Fireblade-SP.jpg",
      type: "Race bike",
      author: "harshil Hingu",
      hashtags: ["BMW", "Trigger", "Hayabuza"]
    };
    this.myList.addContent(contentitem);
    contentitem = {
      id: 1,
      title: 'BMW',
      body: "Steel",
      imageLink: "https://img.etimg.com/thumb/msid-75572296,width-640,resizemode-4,imgsize-507941/bmw-ninet.jpg",
      type: "FM",
      author: "Harsil Hingu",
      hashtags: ["BMW", "Trigger", "Hayabuza"]
    };
    this.myList.addContent(contentitem);
    contentitem = {
      id: 2,
      title: 'Splender',
      body: "Steel",
      imageLink: "https://bd.gaadicdn.com/processedimages/hero-motocorp/hero-motocorp-splendor/source/hero-motocorp-splendor62863b5bef195.jpg",
      type: "Heavy model",
      author: "Harsil Hingu",
      hashtags: ["BMW", "Trigger", "Hayabuza"]
    };
    this.myList.addContent(contentitem);
    contentitem = {
      id: 3,
      title: 'Hero Honda',
      body: "aluminum",
      imageLink: "https://static.autox.com/uploads/bikes/2017/05/1486030508-hero-hf-deluxe.jpg",
      type: "FM",
      author: "Harsil Hingu",
      hashtags: ["BMW", "Trigger", "Hayabuza"]
    };
    this.myList.addContent(contentitem);

  }
}
