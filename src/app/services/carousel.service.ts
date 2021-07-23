import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = '../assets/json/carousel.json';
  }
  getCarouselData(): any {
    return this.http.get(this.url);
  }
}
