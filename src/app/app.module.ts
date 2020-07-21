import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlluserComponent } from './alluser/alluser.component';
import { FooterComponent } from './footer/footer.component';
import { LoginappComponent } from './loginapp/loginapp.component';
import { RegistersComponent } from './registers/registers.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlluserComponent,
    FooterComponent,
    LoginappComponent,
    RegistersComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
