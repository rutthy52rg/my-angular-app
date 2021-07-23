import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselService } from '../../services/carousel.service';

declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig],
})
export class CarouselComponent implements OnInit {
  public carouselData: any;
  public renderItem = true;
  public config = NgbCarouselConfig;
  public interval = 2000;
  public keyboard = true;
  public pauseOnHover = true;

  constructor(private carouselService: CarouselService) {
    /*=============================================
    REVIEW  recibiendo datos / sucribe => recibimos respuesta
    =============================================*/
    this.carouselService.getCarouselData().subscribe((data) => {
      console.log('respuesta carousel', data);
      this.carouselData = data;
    });
    this.interval = 2000;
    this.keyboard = true;
    this.pauseOnHover = true;
  }

  ngOnInit(): void {}
  callback = (): any => {
    if (this.renderItem) {
      this.renderItem = false;
      console.log('cargado');
    }
  }
}
