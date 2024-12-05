import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelComponent } from './pages/travel/travel.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { EventComponent } from './pages/event/event.component';

const routes: Routes = [
  {path:'', component:TravelComponent},
  {path:'event',component:EventComponent},
  {path:'survey',component:SurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
