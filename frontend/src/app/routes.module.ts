import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {CvComponent} from "./pages/cv/cv.component";
import {WorkComponent} from "./pages/work/work.component";
import {ResponsiveTableComponent} from "./pages/projects/responsive-table/responsive-table.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'cv', component: CvComponent},
  {path: 'work', component: WorkComponent},
  {path: 'ResponsiveTable', component: ResponsiveTableComponent},
  { path: '**', redirectTo: 'home' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
export const routingComponents = [HomeComponent, AboutComponent, ContactComponent, CvComponent, WorkComponent, ResponsiveTableComponent]
