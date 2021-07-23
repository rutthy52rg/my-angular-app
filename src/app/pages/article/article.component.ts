import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../../services/gallery.service';
import { UsersService } from '../../services/users.service';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  public articleJson: any;
  public articleSearch: any;
  public paramId: any;
  public bgImage: any;
  public title: any;
  public description: any;
  public content: any;
  public login: boolean;
  public user: any;
  public pass: any;
  public userSearch: any;
  public userJson: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private galleryService: GalleryService,
    private userService: UsersService
  ) {
    this.login = false;
    // console.log('activateroute', activateRoute.snapshot.params.id);
    // tslint:disable-next-line: radix
    this.paramId = activateRoute.snapshot.params.id;
    // console.log(this.paramId);
    this.galleryService.getGalleryData().subscribe((data) => {
      // console.log('respuesta galeria', data);
      this.articleJson = data;
      // console.log(this.articleJson);
      this.articleSearch = this.articleJson.find((ele) => {
        // console.log(ele.id);
        // console.log(this.paramId);
        // tslint:disable-next-line: triple-equals
        return ele.url == this.paramId;
      });
      this.bgImage = this.articleSearch.image;
      this.title = this.articleSearch.title;
      this.description = this.articleSearch.description;
      this.content = this.articleSearch.content;
      // console.log(this.articleSearch.id);
      // console.log(this.articleJson);

    });
  }
  ngOnInit(): void {}
  onSubmit(f: NgForm): void {
    console.log(this.user, this.pass);
    console.log(f);
    this.userService.getUsersData().subscribe((userData) => {
      console.log('users', userData);
      this.userJson = userData;
      this.userSearch = this.userJson.find((ele) => {
        return ele.user == this.paramId;
      });

    });
  }
}

