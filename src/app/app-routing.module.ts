import { LoginlayoutComponent } from './layouts/loginlayout/loginlayout.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FrontendlayoutComponent } from './layouts/frontendlayout/frontendlayout.component';




// const routes: Routes = [


  
// //  { path: '', redirectTo: '/login', pathMatch: 'full' },
// //   { path: 'login',  component:  LoginComponent },
// //   { path: 'home',  component:  HomeComponent },
// //   { path: 'about', component: AboutComponent },
// //  { path: 'detail/:id', component: HeroDetailComponent },
// //  { path: 'heroes', component: HeroesComponent }
// ];

const routes: Routes = [
  // Route สำหรับเรียกหน้า Frontend Layout
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path:'login',
    component: LoginlayoutComponent,
    children:[
      {
        path: "",
        component: LoginComponent
      }
    ]
  },

  {
    path:'creditburo',
    component: FrontendlayoutComponent,
    children:[
      {
        path: "",
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: "Home",
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent
      },
    ]
  }
 // Route สำหรับเรียกหน้า Backend Layout
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
