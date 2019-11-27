//Angular Core 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datails',
  templateUrl: './datails.component.html',
  styleUrls: ['./datails.component.css']
})

//Entering images in a String[]
export class DatailsComponent implements OnInit {

  images: string []= ['https://d15jm47acbjce0.cloudfront.net/s838x629_1479773199407.JPG',
  'https://www.lamudi.com.co/static/cms/Content/Medellin_apto_arriendo_LAMUDI.jpg',
  'https://imganuncios.mitula.net/apartaestudio_en_arriendoventa_en_medellin_loma_de_los_gonzalez_1560084547217696150.jpg'
];

  constructor() { }

  ngOnInit() {
  }

}
