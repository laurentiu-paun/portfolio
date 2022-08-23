import {RouterModule} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {CvComponent} from "./pages/cv/cv.component";
import {WorkComponent} from "./pages/work/work.component";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'cv', component: CvComponent},
      {path: 'work', component: WorkComponent},
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: []
})
export class AppRoutingModule {
}
