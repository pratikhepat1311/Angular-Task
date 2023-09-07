import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { ChangeBgColorDirective } from './change-bg-color.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './Component/user-form/user-form.component';
import { TempdirectiveDirective } from './Directives/tempdirective.directive';
import { ReactdirectiveDirective } from './Directives/reactdirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ChangeBgColorDirective,
    UserFormComponent,
    TempdirectiveDirective,
    ReactdirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
