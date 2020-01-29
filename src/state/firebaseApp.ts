import * as firebase from 'firebase/app';
// import "firebase-app/auth";
import 'firebase/firestore';
import config from 'config';

export abstract class FirebaseApp {
  public static instance: firebase.app.App;

  public static readonly initialize = () => {
    FirebaseApp.instance = firebase.initializeApp(config.firebase);
  };

  public static readonly firestore = () => {
    return FirebaseApp.instance.firestore();
  };
}
