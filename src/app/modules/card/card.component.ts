import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public galleryData: any;
  public renderItem = true;
  constructor(private galleryService: GalleryService) {
    this.galleryService
      .getGalleryData()
      .subscribe(data => {
          console.log('respuesta galeria', data);
          this.galleryData = data;
      });
  }
  ngOnInit(): void {}
  callback = (): any => {
    if (this.renderItem) {
      this.renderItem = false; // para que sólo ejecute una vez
      console.log('cargado');
    }
  }
}

