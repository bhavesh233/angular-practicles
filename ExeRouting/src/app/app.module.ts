import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { PostJobComponent } from './jobs/post-job/post-job.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { LoginService } from './login.service';
import { PostJobService } from './jobs/post-job.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, JobsComponent, LoginComponent, PostJobComponent, JobDetailsComponent, JobListComponent],
  imports: [BrowserModule,FormsModule ,AppRoutingModule],
  providers: [LoginService,PostJobService],
  bootstrap: [AppComponent],
})
export class AppModule {}
