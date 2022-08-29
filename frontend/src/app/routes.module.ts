import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {CvComponent} from "./pages/cv/cv.component";
import {WorkComponent} from "./pages/work/work.component";
import {ResponsiveTableComponent} from "./pages/projects/responsive-table/responsive-table.component";
import {ColorPaletteComponent} from "./pages/projects/color-palette/color-palette.component"
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: 'home', component: HomeComponent, title: "Frontend - Home"},
  {path: 'about', component: AboutComponent, title: "Frontend - Despre mine"},
  {path: 'contact', component: ContactComponent, title: "Frontend - Contact"},
  {path: 'cv', component: CvComponent, title: "Frontend - CV"},
  {path: 'work', component: WorkComponent, title: "Frontend - Proiecte"},
  {path: 'ResponsiveTable', component: ResponsiveTableComponent, title: "Proiecte - Tabel Responsive"},
  {path: 'ColorPalette', component: ColorPaletteComponent, title: "Proiecte - Paleta de culori"},
  { path: '**', redirectTo: 'home' ,title: "Frontend"}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
export const routingComponents = [HomeComponent, AboutComponent, ContactComponent, CvComponent, WorkComponent, ResponsiveTableComponent, ColorPaletteComponent]
