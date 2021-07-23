/*=============================================
ANCHOR importamos compoenente pra recopilar metadatos de configuración de componentes
=============================================*/
import { Component } from '@angular/core';


/*=============================================
ANCHOR decorador clase componente
=============================================*/
@Component({
  /*=============================================
ANCHOR tag del componente
=============================================*/
  selector: 'app-root',
  /*=============================================
ANCHOR plantilla html del componente
=============================================*/
  templateUrl: './app.component.html',
  /*=============================================
ANCHOR plantilla de estilos del componente
=============================================*/
  styleUrls: ['./app.component.scss']
})

/*=============================================
ANCHOR exportación del componente
=============================================*/
export class AppComponent {
  /*=============================================
ANCHOR variables y métodos {{title}}
=============================================*/
  title = 'mi-rincon';
}
