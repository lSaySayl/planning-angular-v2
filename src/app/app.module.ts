import { NgModule, isDevMode } from '@angular/core';
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
import { AuthFormComponent } from './components/organisms/auth-form/auth-form.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ButtonGoogleComponent } from './components/atoms/button-google/button-google.component';
import { RegisterFormComponent } from './components/molecules/register-form/register-form.component';
import { TableComponent } from './components/pages/table/table.component';
import { GameComponent } from './components/pages/game/game.component';
import { GameFormComponent } from './components/molecules/game-form/game-form.component';
import { GameHeaderComponent } from './components/molecules/game-header/game-header.component';
import { GamePersonComponent } from './components/organisms/game-person/game-person.component';
import { PokerTableComponent } from './components/atoms/table/poker-table.component';
import { TableHeaderComponent } from './components/organisms/table-header/table-header.component';
import { StoreModule } from '@ngrx/store';
import { cardReducer } from './state/reducers/card.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AdminComponent } from './components/pages/admin/admin.component';
import { CardComponent } from './components/atoms/card/card.component';
import { DeckOfCardsComponent } from './components/organisms/deck-of-cards/deck-of-cards.component';
import { GamePokerComponent } from './components/molecules/game-poker/game-poker.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { FichaComponent } from './components/atoms/ficha/ficha.component';
import { LoadingCardsComponent } from './components/atoms/loading-cards/loading-cards.component';
import { GameInviteModalComponent } from './components/organisms/game-invite-modal/game-invite-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ClipboardModule} from '@angular/cdk/clipboard';


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
    GamePersonComponent,
    PokerTableComponent,
    TableHeaderComponent,
    AdminComponent,
    CardComponent,
    DeckOfCardsComponent,
    GamePokerComponent,
    LogoComponent,
    FichaComponent,
    LoadingCardsComponent,
    GameInviteModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    StoreModule.forRoot({ 'cardReducer':cardReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    BrowserAnimationsModule,
    ClipboardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
