import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FormComponent } from './form/form.component';
import { ShowComponent } from './show/show.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoDataService } from './todo-data.service';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

// export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    FormComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // 3. Initialize
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    // AngularFireAuthModule, // auth
    // AngularFireStorageModule // storage
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
