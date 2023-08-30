import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { ButtonComponent } from './components/atoms/button/button.component';
import { HomeComponent } from './components/pages/home/home.component';
import { InputComponent } from './components/atoms/input/input.component';
import { AuthenticationComponent } from './components/molecules/authentication/authentication.component';
import { AuthFormComponent } from './components/molecules/auth-form/auth-form.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ButtonGoogleComponent } from './components/atoms/button-google/button-google.component';
import { RegisterFormComponent } from './components/molecules/register-form/register-form.component';
import { TableComponent } from './components/pages/table/table.component';
import { GameComponent } from './components/pages/game/game.component';
import { GameFormComponent } from './components/molecules/game-form/game-form.component';
import { GameHeaderComponent } from './components/molecules/game-header/game-header.component';
import { GamePersonComponent } from './components/molecules/game-person/game-person.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HomeComponent,
    InputComponent,
    AuthenticationComponent,
    AuthFormComponent,
    RegisterComponent,
    LoginComponent,
    ButtonGoogleComponent,
    RegisterFormComponent,
    TableComponent,
    GameComponent,
    GameFormComponent,
    GameHeaderComponent,
    GamePersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
