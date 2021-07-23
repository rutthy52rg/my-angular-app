
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

/*=============================================
ANCHOR importamos los módulos de ruta
=============================================*/
import { AppRoutingModule } from './app-routing.module';
/*=============================================
ANCHOR importamos el componente principal que llevará el resto de componentes
=============================================*/
import { AppComponent } from './app.component';
import { CardComponent } from './modules/card/card.component';
import { ArticleComponent } from './pages/article/article.component';
import { IndexComponent } from './pages/index/index.component';
import { CarouselComponent } from './sections/carousel/carousel.component';
import { FormComponent } from './sections/form/form.component';
import { GalleryComponent } from './sections/gallery/gallery.component';
import { HeaderComponent } from './sections/header/header.component';



/*=============================================
ANCHOR decoradores son funciones que modifican las clases de JS
=============================================*/
@NgModule({
  /*=============================================
ANCHOR declaraciones son las clases de vista que pertenecen a este módulo
=============================================*/
  declarations: [
    AppComponent,
    CardComponent,
    ArticleComponent,
    IndexComponent,
    CarouselComponent,
    FormComponent,
    GalleryComponent,
    HeaderComponent,
  ],
  /*=============================================
ANCHOR importamos otros módulos cuyas clases exportdas sean necesarias para
 las plantillas de componentes declaradas en estemódulo directivas y pipes
=============================================*/
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  /*=============================================
ANCHOR provaiders: importamos proveedorees de servicios eje. bbdd
=============================================*/
  providers: [],
  bootstrap: [AppComponent],
})

/*=============================================
ANCHOR exportación de la clase para que se pueda invocar en el resto de la app
=============================================*/
export class AppModule {}
