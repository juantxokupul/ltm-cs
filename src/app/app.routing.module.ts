import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HelloComponent } from './hello.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutPageComponent,
    data: { animation: 'isRight' },
  },
  { path: 'home', component: HelloComponent, data: { animation: 'isLeft' } },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
