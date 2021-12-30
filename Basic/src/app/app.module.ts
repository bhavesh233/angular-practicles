import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Example1Component } from './example1/example1.component';
import { UserExampleComponent } from './user-example/user-example.component';
import { Example3Component } from './example3/example3.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    UserExampleComponent,
    Example3Component
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
