import { TendenciasComponent } from './components/tendencias/tendencias.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './components/shared/footer/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header/header.component';
import { NavbarComponent } from './components/shared/navbar/navbar/navbar.component';
import { CarouselComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent} from '@coreui/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { HttpClientModule } from '@angular/common/http';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    TendenciasComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    TagModule,
    ButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
