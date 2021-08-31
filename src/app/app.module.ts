import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { FreeapiService } from './freeapi.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SearchFormComponent,
    InstrumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FreeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
