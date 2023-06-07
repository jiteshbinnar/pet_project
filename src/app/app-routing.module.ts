import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddStudentInfoComponent } from './add-student-info/add-student-info.component';
import { DetailsOfStudentComponent } from './details-of-student/details-of-student.component';
import { InstituteNameComponent } from './institute-name/institute-name.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PictureComponent } from './picture/picture.component';
import { RootPageComponent } from './root-page/root-page.component';

import { StudentInfoComponent } from './student-info/student-info.component';

const routes: Routes = [
  {path:'',redirectTo:'studentInfo',pathMatch:'full'},
  {path:'studentInfo',component:RootPageComponent,children:[
    {path:'getStudentInfo',component:StudentInfoComponent}
  ]},
  {path:'addStudentInfo',component:AddStudentInfoComponent},
  {path:'about',component:AboutComponent},
  {path:'getStudentInfo/:id',component:DetailsOfStudentComponent},
  {path:'instituteInfo',component:InstituteNameComponent},
  {path:'instituteInfo/:id',component:PictureComponent},
  {path:'ourTeam',component:OurTeamComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
