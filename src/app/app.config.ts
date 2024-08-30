import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'news-database-91ab8',
        appId: '1:864158664713:web:50554167b6394c5a5c50d8',
        storageBucket: 'news-database-91ab8.appspot.com',

        apiKey: 'AIzaSyA_3CiywLqU30-PX8XUU0-4Ku5vF3OUEsM',
        authDomain: 'news-database-91ab8.firebaseapp.com',
        messagingSenderId: '864158664713',
      })
    ),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
};
