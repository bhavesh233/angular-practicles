import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobsComponent } from './jobs/jobs.component';
import { PostJobComponent } from './jobs/post-job/post-job.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'jobs',
    component: JobsComponent,
    children: [
      { path: 'job-list', component: JobListComponent },
      { path: 'post-job', component: PostJobComponent },
      { path: 'post-job/:id', component: PostJobComponent },
      { path: 'job-details', component: JobDetailsComponent },
      { path: ':id', component: JobDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
