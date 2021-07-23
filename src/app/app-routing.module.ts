import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './pages/article/article.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  { path: '',
    component: IndexComponent
  },
  { path: 'index' ,
  component: IndexComponent
  },
  { path: 'article/:id' ,
  component: ArticleComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: '',
  component: IndexComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
