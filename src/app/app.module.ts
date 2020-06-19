import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { AppSidebarService } from './sidebar.service';
import { OtherComponent } from './other';
import { MoreOtherComponent } from './more-other';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule
     ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    OtherComponent,
    MoreOtherComponent    
    ],
  providers: [ DataService, AppSidebarService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
