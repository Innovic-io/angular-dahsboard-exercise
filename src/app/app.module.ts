import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/header/search/search.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { AppLogoComponent } from './components/header/app-logo/app-logo.component';
import { MenuItemComponent } from './components/header/menu/menu-item/menu-item.component';
import { NotificationComponent } from './components/header/notification/notification.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardCardItemsComponent } from './components/dashboard/dashboard-card-items/dashboard-card-items.component';
import { CardTitleComponent } from './components/dashboard/card-title/card-title.component';
import { DocumentsComponent } from './components/dashboard/documents/documents.component';
import { ActiveUsersComponent } from './components/dashboard/active-users/active-users.component';
import { CalendarComponent } from './components/dashboard/calendar/calendar.component';
import { ChartPieComponent } from './components/dashboard/chart-pie/chart-pie.component';
import { ChartLineComponent } from './components/dashboard/chart-line/chart-line.component';
import { AgmCoreModule } from '@agm/core';
import { ProfileComponent } from './components/header/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    MenuComponent,
    AppLogoComponent,
    MenuItemComponent,
    NotificationComponent,
    DashboardComponent,
    DashboardCardItemsComponent,
    CardTitleComponent,
    DocumentsComponent,
    ActiveUsersComponent,
    CalendarComponent,
    ChartPieComponent,
    ChartLineComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCQrvgdsNybTtO4jTjZMCTH5X_pM1kTn5A'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
