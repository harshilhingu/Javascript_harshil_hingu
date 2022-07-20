import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  temp = false;
  itsAvailable = "";
  itsNotAvailable = "";

  title = 'H_Hingu_bikes';
  bikeList: Content[];
  constructor() {
    this.bikeList = [{
      id: 1,
      title: 'CBR 10000RR',
      body: "Steel very good and perfect even it's my fav bike from all of them ",
      imageLink: "https://cdni.autocarindia.com/ExtraImages/20200730063629_2020-Honda-CBR1000RR-R-Fireblade-SP.jpg",
      type: "Racing",
      author: "harshil Hingu",
      hashtags: ["BMW", "Trigger", "Hayabuza"]
    },
    {
      id: 2,
      title: 'BMW',
      body: "Steel is in good condition",
      imageLink: "https://img.etimg.com/thumb/msid-75572296,width-640,resizemode-4,imgsize-507941/bmw-ninet.jpg",
      type: "Racing",
      author: "Harsil Hingu",
      hashtags: ["BMW", "Trigger", "Hayabuza"]
    },
    {
      id: 3,
      title: 'Splender',
      body: "Steel very good and confprtable to run and use",
      imageLink: "https://bd.gaadicdn.com/processedimages/hero-motocorp/hero-motocorp-splendor/source/hero-motocorp-splendor62863b5bef195.jpg",
      author: "Harsil Hingu",
      hashtags: ["BMW", "Trigger", "Hayabuza"]
    },
    {
      id: 4,
      title: 'Hero Honda',
      body: "Aluminum not that much effective but it's good for some years ",
      imageLink: "https://static.autox.com/uploads/bikes/2017/05/1486030508-hero-hf-deluxe.jpg",
      type: "sport",
      author: "Harsil Hingu",
      hashtags: ["BMW", "Trigger", "Hayabuza"]
    },
    {
      id: 5,
      title: 'Trigger',
      body: "it's good for some years ",
      imageLink: "https://etimg.etb2bimg.com/thumb/msid-48356059,imgsize-83923,width-1200,height-628,overlay-etauto/honda-motorcycle-and-scooter-india-discontinues-cb-trigger-within-30-months-of-launch.jpg",
      type: "sport",
      author: "Harsil Hingu",
      hashtags: ["BMW", "Trigger", "Hayabuza"]
    },
        {
      id: 6,
      title: 'Hayabuza',
      body: "Aluminum",
      imageLink: "https://img.etimg.com/thumb/msid-82267745,width-1070,height-580,imgsize-584129,overlay-etpanache/photo.jpg",
      type: "Racing",
      author: "Harsil Hingu",
      hashtags: ["BMW", "Trigger", "Hayabuza"]
    },    
    {
      id: 7,
      title: 'Ola',
      body: "Aluminum",
      imageLink: "https://images.hindustantimes.com/auto/img/2021/01/13/600x338/Royal_Enfiled_Classic_350_1606287446412_1606287452623_1610507147713.jpg",
      type: "Racing",
      author: "Harsil Hingu",
      hashtags: ["BMW", "Trigger", "Hayabuza"]
    },
                     
  ];
  }
  ngOnInit(): void {

  }
  updatePage(typesoncard: string): void {
    
   
    this.bikeList.forEach(t => {
      if (t.author == typesoncard ){
        this.temp = true;
      }
    });
    if(this.temp){
      typesoncard = typesoncard+" is available in list.";
      this.itsAvailable = typesoncard;
      this.itsNotAvailable = "";

    }else{
      typesoncard = typesoncard+" is not available in list.";
      this.itsNotAvailable = typesoncard;
      this.itsAvailable = "";
    }
    this.temp = false;
    
  }
  
  }


