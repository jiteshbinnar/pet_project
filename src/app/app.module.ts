import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RootPageComponent } from './root-page/root-page.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { StudentInfoComponent } from './student-info/student-info.component';
import { AddStudentInfoComponent } from './add-student-info/add-student-info.component';
import { AboutComponent } from './about/about.component';
import { DetailsOfStudentComponent } from './details-of-student/details-of-student.component';
import { InstituteNameComponent } from './institute-name/institute-name.component';
import { PictureComponent } from './picture/picture.component';
import { FilterPipe } from './filter.pipe';
import { OurTeamComponent } from './our-team/our-team.component';

@NgModule({
  declarations: [
    AppComponent,
    RootPageComponent,
    StudentInfoComponent,
    AddStudentInfoComponent,
    AboutComponent,
    DetailsOfStudentComponent,
    InstituteNameComponent,
    PictureComponent,
    FilterPipe,
    OurTeamComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,
   HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,{ dataEncapsulation: false },
      
 ),

  
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
