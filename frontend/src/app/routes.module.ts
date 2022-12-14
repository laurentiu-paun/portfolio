import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {CvComponent} from "./pages/cv/cv.component";
import {WorkComponent} from "./pages/work/work.component";
import {ResponsiveTableComponent} from "./pages/projects/responsive-table/responsive-table.component";
import {ColorPaletteComponent} from "./pages/projects/color-palette/color-palette.component"
import {CarsStatusComponent} from "./pages/projects/cars-status/cars-status.component";
import {JobApplicationComponent} from "./pages/projects/job-application/job-application.component";
import {WeatherForecastComponent} from "./pages/projects/weather-forecast/weather-forecast.component";
import {PortfolioElementsComponent} from "./pages/projects/portfolio-elements/portfolio-elements.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: 'home', component: HomeComponent, title: "Frontend - Home"},
  {path: 'about', component: AboutComponent, title: "Frontend - Despre mine"},
  {path: 'contact', component: ContactComponent, title: "Frontend - Contact"},
  {path: 'cv', component: CvComponent, title: "Frontend - CV"},
  {path: 'work', component: WorkComponent, title: "Frontend - Proiectele mele"},
  {path: 'responsiveTable', component: ResponsiveTableComponent, title: "Proiectele mele - Tabel Responsive"},
  {path: 'colorPalette', component: ColorPaletteComponent, title: "Proiectele mele - Paleta de culori"},
  {path: 'carsStatus', component: CarsStatusComponent, title: "Proiectele mele - Status masini"},
  {path: 'jobApplication', component: JobApplicationComponent, title: "Proiectele mele - Oferta de angajare"},
  {path: 'weatherForecast', component: WeatherForecastComponent, title: "Proiectele mele - Prognoza meteo"},
  {path: 'portfolioElements', component: PortfolioElementsComponent, title: "Proiectele mele - Elemente portofoliu"},
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
export const routingComponents = [HomeComponent, AboutComponent, ContactComponent, CvComponent, WorkComponent, ResponsiveTableComponent, ColorPaletteComponent, CarsStatusComponent, JobApplicationComponent, WeatherForecastComponent, PortfolioElementsComponent]
